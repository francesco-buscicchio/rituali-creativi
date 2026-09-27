import { siteContent } from '../../data/siteContent'
import { EMAIL_LOGO_CID, escapeHtml } from './mailer'

// Layout delle email HTML: tabelle e stili inline, perché Gmail e Outlook
// ignorano flex/grid, CSS esterni e buona parte dei fogli di stile.
// Le funzioni che ricevono `html` si aspettano markup già sicuro, le altre fanno l'escape.
// La card sta in una tabella con border-collapse: separate, altrimenti il bordo resta squadrato.

const SITE_URL = 'https://ritualicreativi.it'

const color = {
  page: '#F7F3EE',
  card: '#FFFDFA',
  box: '#F7F3EE',
  line: '#EAE3DB',
  ink: '#3A332E',
  text: '#625A54',
  muted: '#7E756E',
  clay: '#8D594A',
  terracotta: '#B87A63'
}

const serif = `'Cormorant Garamond', Georgia, 'Times New Roman', serif`
const sans = `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`

const eyebrowStyle = `font-family:${sans};font-size:12px;line-height:16px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:${color.clay};`
const labelStyle = `font-family:${sans};font-size:11px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:${color.clay};`
const textStyle = `font-family:${sans};font-size:16px;line-height:26px;color:${color.text};`

export function mailtoHref(address: string, subject?: string) {
  const to = encodeURIComponent(address).replace(/%40/g, '@')
  return subject ? `mailto:${to}?subject=${encodeURIComponent(subject)}` : `mailto:${to}`
}

export function emailLink(label: string, href: string) {
  return `<a href="${escapeHtml(href)}" style="color:${color.clay};text-decoration:underline;">${escapeHtml(label)}</a>`
}

export function emailParagraph(html: string) {
  return `<tr><td style="padding-top:16px;${textStyle}">${html}</td></tr>`
}

export function emailNote(html: string) {
  return `<tr><td style="padding-top:14px;font-family:${sans};font-size:14px;line-height:22px;color:${color.muted};">${html}</td></tr>`
}

export function emailDetails(rows: { label: string; html: string }[]) {
  const cells = rows
    .map((row, index) => {
      const border = index > 0 ? `border-top:1px solid ${color.line};` : ''
      return `<tr>
<td class="rc-label" width="104" valign="top" style="${border}padding:14px 16px 14px 0;${labelStyle}line-height:24px;">${escapeHtml(row.label)}</td>
<td class="rc-value" valign="top" style="${border}padding:14px 0;font-family:${sans};font-size:16px;line-height:24px;color:${color.ink};word-break:break-word;">${row.html}</td>
</tr>`
    })
    .join('')

  return `<tr><td style="padding-top:28px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid ${color.line};border-bottom:1px solid ${color.line};">${cells}</table>
</td></tr>`
}

export function emailMessage(label: string, message: string) {
  const html = escapeHtml(message).replace(/\r?\n/g, '<br>')

  return `<tr><td style="padding-top:28px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td class="rc-box" bgcolor="${color.box}" style="background-color:${color.box};border-radius:20px;padding:22px 26px;">
<p style="margin:0;${labelStyle}line-height:16px;">${escapeHtml(label)}</p>
<p style="margin:10px 0 0;${textStyle}color:${color.ink};word-break:break-word;">${html}</p>
</td></tr>
</table>
</td></tr>`
}

export function emailButton(label: string, href: string) {
  return `<tr><td style="padding-top:32px;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0">
<tr><td bgcolor="${color.terracotta}" style="background-color:${color.terracotta};border-radius:999px;mso-padding-alt:14px 28px;">
<a href="${escapeHtml(href)}" style="display:inline-block;padding:14px 28px;font-family:${sans};font-size:15px;line-height:20px;font-weight:600;color:#FFFFFF;text-decoration:none;border-radius:999px;">${escapeHtml(label)}</a>
</td></tr>
</table>
</td></tr>`
}

export function emailSignature(closing: string, signature: string) {
  return `<tr><td style="padding-top:32px;${textStyle}">${escapeHtml(closing)}</td></tr>
<tr><td class="rc-serif" style="padding-top:2px;font-family:${serif};font-size:26px;line-height:32px;font-style:italic;color:${color.ink};">${escapeHtml(signature)}</td></tr>`
}

export function renderEmail(options: {
  title: string
  preheader: string
  eyebrow: string
  heading: string
  content: string[]
  footnote: string
}) {
  const { brand, socials } = siteContent

  // Testo di anteprima mostrato in inbox accanto all'oggetto
  const preheader = options.preheader.replace(/\s+/g, ' ').trim()
  const shortPreheader = preheader.length > 140 ? `${preheader.slice(0, 139)}…` : preheader

  const footerLinks = [...socials, { label: 'ritualicreativi.it', href: SITE_URL }]
    .map(
      ({ label, href }) =>
        `<a href="${escapeHtml(href)}" style="color:${color.clay};font-weight:600;text-decoration:none;">${escapeHtml(label)}</a>`
    )
    .join('&nbsp;&nbsp;·&nbsp;&nbsp;')

  return `<!DOCTYPE html>
<html lang="it" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>${escapeHtml(options.title)}</title>
<!--[if mso]>
<noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
<style>td, p, a { font-family: Arial, Helvetica, sans-serif !important; } .rc-serif, .rc-serif a { font-family: Georgia, 'Times New Roman', serif !important; }</style>
<![endif]-->
<style>
body { margin: 0; padding: 0; width: 100% !important; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
table { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
img { border: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
@media only screen and (max-width: 620px) {
  .rc-outer { padding: 24px 12px 36px !important; }
  .rc-card { padding: 32px 22px !important; border-radius: 24px !important; }
  .rc-heading { font-size: 26px !important; line-height: 32px !important; }
  .rc-label, .rc-value { display: block !important; width: auto !important; }
  .rc-label { padding: 14px 0 0 !important; }
  .rc-value { padding: 2px 0 14px !important; border-top: 0 !important; }
  .rc-box { padding: 18px 20px !important; }
}
</style>
</head>
<body style="margin:0;padding:0;background-color:${color.page};">
<div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">${escapeHtml(shortPreheader)}${'&#847;&zwnj;&nbsp;'.repeat(60)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${color.page}" style="background-color:${color.page};">
<tr>
<td class="rc-outer" align="center" style="padding:40px 16px 48px;">
<!--[if mso]><table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">
<tr>
<td align="center" style="padding-bottom:24px;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0">
<tr>
<td valign="middle" style="padding-right:12px;"><a href="${SITE_URL}"><img src="cid:${EMAIL_LOGO_CID}" width="44" height="44" alt="" style="display:block;width:44px;height:44px;border:0;"></a></td>
<td class="rc-serif" valign="middle" style="font-family:${serif};font-size:26px;line-height:32px;color:${color.ink};"><a href="${SITE_URL}" style="color:${color.ink};text-decoration:none;">${escapeHtml(brand.name)}</a></td>
</tr>
</table>
</td>
</tr>
<tr>
<td>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate;border-spacing:0;">
<tr>
<td class="rc-card" bgcolor="${color.card}" style="background-color:${color.card};border:1px solid ${color.line};border-radius:28px;padding:44px 48px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td style="${eyebrowStyle}">${escapeHtml(options.eyebrow)}</td></tr>
<tr><td class="rc-heading rc-serif" style="padding-top:12px;font-family:${serif};font-size:30px;line-height:36px;font-weight:normal;color:${color.ink};word-break:break-word;">${escapeHtml(options.heading)}</td></tr>
${options.content.join('\n')}
</table>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td align="center" style="padding:32px 16px 0;">
<p class="rc-serif" style="margin:0;font-family:${serif};font-size:19px;line-height:26px;font-style:italic;color:${color.text};">${escapeHtml(brand.footerNote)}</p>
<p style="margin:14px 0 0;font-family:${sans};font-size:13px;line-height:20px;color:${color.muted};">${footerLinks}</p>
<p style="margin:14px 0 0;font-family:${sans};font-size:12px;line-height:18px;color:${color.muted};">${escapeHtml(options.footnote)}</p>
</td>
</tr>
</table>
<!--[if mso]></td></tr></table><![endif]-->
</td>
</tr>
</table>
</body>
</html>`
}
