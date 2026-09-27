import {
  emailButton,
  emailDetails,
  emailLink,
  emailMessage,
  emailNote,
  emailParagraph,
  emailSignature,
  mailtoHref,
  renderEmail
} from '../utils/emailTemplate'
import { escapeHtml, getAdminEmail, sendMail } from '../utils/mailer'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const dateFormatter = new Intl.DateTimeFormat('it-IT', {
  dateStyle: 'long',
  timeStyle: 'short',
  timeZone: 'Europe/Rome'
})

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

  const receivedAt = dateFormatter.format(new Date())
  const adminSubject = `Nuova richiesta incontri da ${name}`
  const userSubject = 'Abbiamo ricevuto la tua richiesta – Rituali Creativi'

  try {
    await sendMail({
      to: getAdminEmail(),
      replyTo: email,
      subject: adminSubject,
      text: `Nuova richiesta dal form "Vuoi partecipare al prossimo ciclo?"\n\nNome: ${name}\nEmail: ${email}\nRicevuta: ${receivedAt}\n\nMessaggio:\n${message}\n\nPuoi rispondere direttamente a questa email.`,
      html: renderEmail({
        title: adminSubject,
        preheader: `${name}: ${message}`,
        eyebrow: 'Pagina Incontri',
        heading: `Nuova richiesta da ${name}`,
        content: [
          emailParagraph('È arrivato un nuovo messaggio dal form <strong>Vuoi partecipare al prossimo ciclo?</strong>'),
          emailDetails([
            { label: 'Nome', html: escapeHtml(name) },
            { label: 'Email', html: emailLink(email, mailtoHref(email)) },
            { label: 'Ricevuta', html: escapeHtml(receivedAt) }
          ]),
          emailMessage('Messaggio', message),
          emailButton(`Rispondi a ${name}`, mailtoHref(email, 'Rituali Creativi – prossimi incontri')),
          emailNote(`Oppure rispondi direttamente a questa email: la risposta arriverà a ${escapeHtml(email)}.`)
        ],
        footnote: 'Notifica automatica dal form della pagina Incontri.'
      })
    })

    await sendMail({
      to: email,
      replyTo: getAdminEmail(),
      subject: userSubject,
      text: `Ciao ${name},\n\ngrazie per il tuo interesse verso i prossimi incontri di Rituali Creativi. Ho ricevuto la tua richiesta e ti risponderò al più presto con disponibilità, luogo e prossime date.\n\nIl tuo messaggio:\n${message}\n\nA presto,\nRituali Creativi`,
      html: renderEmail({
        title: userSubject,
        preheader: 'Grazie per il tuo interesse: ti risponderò al più presto con disponibilità, luogo e prossime date.',
        eyebrow: 'Richiesta ricevuta',
        heading: `Ciao ${name},`,
        content: [
          emailParagraph('grazie per il tuo interesse verso i prossimi incontri di Rituali Creativi. Ho ricevuto la tua richiesta e ti risponderò al più presto con disponibilità, luogo e prossime date.'),
          emailMessage('Il tuo messaggio', message),
          emailSignature('A presto,', 'Rituali Creativi')
        ],
        footnote: 'Hai ricevuto questa email perché hai compilato il form nella pagina Incontri di ritualicreativi.it.'
      })
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
