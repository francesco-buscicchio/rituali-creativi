import { CONTENT_FIELDS } from '~/data/contentSchema'
import type { ContentValue } from '~/data/contentSchema'

/**
 * Testi e immagini del sito: il valore salvato dall'admin se presente,
 * altrimenti il contenuto originale definito in data/contentSchema.ts.
 */
export function useContent() {
  const saved = useState<Record<string, ContentValue> | null>('site-content', () => null)

  function t(key: string): string {
    const field = CONTENT_FIELDS.get(key)
    if (import.meta.dev && !field) {
      console.warn(`[useContent] chiave sconosciuta: ${key}`)
    }
    const value = saved.value?.[key]
    if (typeof value === 'string' && value.trim() !== '') {
      return value
    }
    return field && field.type !== 'list' ? field.default : ''
  }

  function list<T extends Record<string, string>>(key: string): T[] {
    const field = CONTENT_FIELDS.get(key)
    if (!field || field.type !== 'list') {
      if (import.meta.dev) {
        console.warn(`[useContent] lista sconosciuta: ${key}`)
      }
      return []
    }
    const value = saved.value?.[key]
    const items = Array.isArray(value) && value.length ? value : field.default
    // ogni voce ha sempre tutti i campi, anche se salvata prima che ne venisse aggiunto uno
    return items.map(
      (item) => Object.fromEntries(field.fields.map((sub) => [sub.key, item[sub.key] ?? ''])) as T
    )
  }

  return { t, list }
}
