import { createHash, createHmac, timingSafeEqual } from 'node:crypto'
import type { H3Event } from 'h3'

const COOKIE = 'rc_admin'
const SESSION_DAYS = 7

function getAdminPassword() {
  const password = process.env.ADMIN_PASSWORD
  if (!password) {
    throw createError({ statusCode: 500, statusMessage: 'ADMIN_PASSWORD non configurata' })
  }
  return password
}

// La firma dipende dalla password: cambiandola si chiudono tutte le sessioni aperte
function sign(value: string) {
  const secret = process.env.ADMIN_SESSION_SECRET || getAdminPassword()
  return createHmac('sha256', secret).update(value).digest('hex')
}

function sameText(a: string, b: string) {
  // confronto a tempo costante sugli hash, che hanno sempre la stessa lunghezza
  const hashA = createHash('sha256').update(a).digest()
  const hashB = createHash('sha256').update(b).digest()
  return timingSafeEqual(hashA, hashB)
}

export function checkAdminPassword(password: string) {
  return sameText(password, getAdminPassword())
}

export function startAdminSession(event: H3Event) {
  const expires = Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000
  const value = `${expires}.${sign(String(expires))}`
  setCookie(event, COOKIE, value, {
    httpOnly: true,
    sameSite: 'strict',
    secure: !import.meta.dev,
    path: '/',
    maxAge: SESSION_DAYS * 24 * 60 * 60
  })
}

export function endAdminSession(event: H3Event) {
  deleteCookie(event, COOKIE, { path: '/' })
}

export function isAdmin(event: H3Event) {
  const value = getCookie(event, COOKIE)
  if (!value || !process.env.ADMIN_PASSWORD) {
    return false
  }
  const [expires, signature] = value.split('.')
  if (!expires || !signature || Number(expires) < Date.now()) {
    return false
  }
  return sameText(signature, sign(expires))
}

export function requireAdmin(event: H3Event) {
  if (!isAdmin(event)) {
    throw createError({ statusCode: 401, statusMessage: 'Accesso non autorizzato' })
  }
}
