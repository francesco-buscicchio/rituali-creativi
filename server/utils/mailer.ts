import nodemailer from 'nodemailer'
import type { Transporter } from 'nodemailer'

export const ADMIN_EMAIL = 'info@ritualicreativi.it'

let transporter: Transporter | undefined

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

export function sendMail(options: {
  to: string
  subject: string
  text: string
  html: string
  replyTo?: string
}) {
  return getTransporter().sendMail({
    from: getFrom(),
    ...options
  })
}
