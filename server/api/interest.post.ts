import { ADMIN_EMAIL, escapeHtml, sendMail } from '../utils/mailer'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default defineEventHandler(async (event) => {
  const body = await readBody<{
    name?: string
    email?: string
    reason?: string
    message?: string
    website?: string
  }>(event)

  // Honeypot: i bot compilano il campo nascosto, le persone no
  if (body.website) {
    return { ok: true, message: 'Interesse per il ciclo ricevuto' }
  }

  const name = body.name?.trim() ?? ''
  const email = body.email?.trim() ?? ''
  const message = body.message?.trim() ?? ''

  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Dati mancanti'
    })
  }

  if (!emailPattern.test(email) || name.length > 100 || email.length > 200 || message.length > 5000) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Dati non validi'
    })
  }

  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>')

  try {
    await sendMail({
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: `Nuova richiesta incontri da ${name}`,
      text: `Nuova richiesta dal form "Vuoi partecipare al prossimo ciclo?"\n\nNome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`,
      html: `<p>Nuova richiesta dal form <strong>Vuoi partecipare al prossimo ciclo?</strong></p>
<p><strong>Nome:</strong> ${safeName}<br><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
<p><strong>Messaggio:</strong><br>${safeMessage}</p>`
    })

    await sendMail({
      to: email,
      replyTo: ADMIN_EMAIL,
      subject: 'Abbiamo ricevuto la tua richiesta – Rituali Creativi',
      text: `Ciao ${name},\n\ngrazie per il tuo interesse verso i prossimi incontri di Rituali Creativi. Ho ricevuto la tua richiesta e ti risponderò al più presto con disponibilità, luogo e prossime date.\n\nIl tuo messaggio:\n${message}\n\nA presto,\nRituali Creativi`,
      html: `<p>Ciao ${safeName},</p>
<p>grazie per il tuo interesse verso i prossimi incontri di Rituali Creativi. Ho ricevuto la tua richiesta e ti risponderò al più presto con disponibilità, luogo e prossime date.</p>
<p><strong>Il tuo messaggio:</strong><br>${safeMessage}</p>
<p>A presto,<br>Rituali Creativi</p>`
    })
  } catch (error) {
    console.error('[interest] invio email fallito', error)
    throw createError({
      statusCode: 502,
      statusMessage: 'Invio email non riuscito'
    })
  }

  return {
    ok: true,
    message: 'Interesse per il ciclo ricevuto',
    receivedAt: new Date().toISOString()
  }
})
