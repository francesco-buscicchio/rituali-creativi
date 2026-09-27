import nodemailer from 'nodemailer'
import type { Transporter } from 'nodemailer'

// Le richieste arrivano alla casella usata per l'SMTP. Va letta dall'env:
// se il valore di SMTP_USER compare nel codice, il secrets scanning di Netlify blocca il deploy
export function getAdminEmail() {
  const email = process.env.SMTP_USER
  if (!email) {
    throw new Error('SMTP_USER non configurata')
  }
  return email
}

export const EMAIL_LOGO_CID = 'logo@rituali-creativi'

let transporter: Transporter | undefined
let logo: Buffer | null | undefined

function getTransporter() {
  if (transporter) {
    return transporter
  }

  const port = Number(process.env.SMTP_PORT || 465)

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    // La 465 usa TLS implicito, indipendentemente da SMTP_SECURE
    secure: port === 465 || process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000
  })

  return transporter
}

async function getLogo() {
  if (logo === undefined) {
    // Il logo sta in server/assets: in produzione Nitro lo restituisce come Uint8Array
    const raw = await useStorage('assets:server').getItemRaw('email/logo.png').catch(() => null)
    logo = raw ? Buffer.from(raw) : null
  }

  return logo
}

function getFrom() {
  const from = process.env.MAIL_FROM || 'Rituali Creativi'
  return from.includes('@') ? from : `"${from}" <${process.env.SMTP_USER}>`
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function sendMail(options: {
  to: string
  subject: string
  text: string
  html: string
  replyTo?: string
}) {
  // Logo allegato inline (cid): si vede anche nei client che bloccano le immagini remote
  const inlineLogo = options.html.includes(`cid:${EMAIL_LOGO_CID}`) ? await getLogo() : null

  return getTransporter().sendMail({
    from: getFrom(),
    ...options,
    attachments: inlineLogo
      ? [{ filename: 'rituali-creativi.png', content: inlineLogo, cid: EMAIL_LOGO_CID }]
      : []
  })
}
