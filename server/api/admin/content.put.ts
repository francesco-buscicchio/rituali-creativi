import { CONTENT_FIELDS } from '~/data/contentSchema'
import type { ContentValue } from '~/data/contentSchema'

const MAX_TEXT = 10_000
const MAX_ITEMS = 100

function cleanText(value: unknown) {
  return typeof value === 'string' ? value.trim().slice(0, MAX_TEXT) : ''
}

export default defineEventHandler(async (event) => {
  requireAdmin(event)
  const body = await readBody<{ values?: Record<string, unknown> }>(event)
  const values = body?.values

  if (!values || typeof values !== 'object') {
    throw createError({ statusCode: 400, statusMessage: 'Nessun contenuto da salvare' })
  }

  const changes: Record<string, ContentValue | null> = {}

  for (const [key, raw] of Object.entries(values)) {
    const field = CONTENT_FIELDS.get(key)
    if (!field) {
      continue
    }

    if (field.type === 'list') {
      const items = (Array.isArray(raw) ? raw : [])
        .slice(0, MAX_ITEMS)
        .map((item) =>
          Object.fromEntries(
            field.fields.map((sub) => [sub.key, cleanText((item as Record<string, unknown> | null)?.[sub.key])])
          )
        )
        .filter((item) => Object.values(item).some(Boolean))
      // lista vuota = torna ai contenuti originali
      changes[key] = items.length ? items : null
      continue
    }

    const value = cleanText(raw)
    if (field.type === 'image' && value && !/^(\/|https:\/\/)/.test(value)) {
      throw createError({ statusCode: 400, statusMessage: `Indirizzo immagine non valido: ${field.label}` })
    }
    // campo vuoto = torna al testo originale
    changes[key] = value || null
  }

  await writeContent(changes)
  return { ok: true, content: await readContent() }
})
