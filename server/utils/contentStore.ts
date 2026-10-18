import { CONTENT_FIELDS } from '~/data/contentSchema'
import type { ContentValue } from '~/data/contentSchema'

type ContentDoc = { key: string; value: ContentValue; updatedAt: Date }

// In sviluppo senza MONGODB_URI i contenuti finiscono in .data/ (file locali),
// così l'admin si può provare anche senza credenziali. In produzione serve Mongo
function useLocalStore() {
  if (isMongoConfigured()) {
    return false
  }
  if (import.meta.dev) {
    return true
  }
  throw createError({ statusCode: 500, statusMessage: 'MONGODB_URI non configurata' })
}

const LOCAL_KEY = 'admin:content.json'
const CACHE_MS = 10_000
let cache: { at: number; data: Record<string, ContentValue> } | null = null

async function load(): Promise<Record<string, ContentValue>> {
  if (useLocalStore()) {
    return (await useStorage('data').getItem<Record<string, ContentValue>>(LOCAL_KEY)) ?? {}
  }
  const docs = await (await mongoCollection<ContentDoc>('content'))
    .find({}, { projection: { _id: 0, key: 1, value: 1 } })
    .toArray()
  return Object.fromEntries(docs.map((doc) => [doc.key, doc.value]))
}

/** Valori salvati dall'admin (solo le chiavi ancora presenti nel registro). */
export async function readContent(): Promise<Record<string, ContentValue>> {
  // cache breve: le pagine non vanno su Atlas a ogni richiesta
  if (!cache || Date.now() - cache.at > CACHE_MS) {
    cache = { at: Date.now(), data: await load() }
  }
  return Object.fromEntries(Object.entries(cache.data).filter(([key]) => CONTENT_FIELDS.has(key)))
}

/** Salva le modifiche: `null` riporta il campo al contenuto originale. */
export async function writeContent(changes: Record<string, ContentValue | null>) {
  cache = null
  if (useLocalStore()) {
    const storage = useStorage('data')
    const current = (await storage.getItem<Record<string, ContentValue>>(LOCAL_KEY)) ?? {}
    for (const [key, value] of Object.entries(changes)) {
      if (value === null) {
        delete current[key]
      } else {
        current[key] = value
      }
    }
    await storage.setItem(LOCAL_KEY, current)
    return
  }

  const ops = Object.entries(changes).map(([key, value]) =>
    value === null
      ? { deleteOne: { filter: { key } } }
      : {
          updateOne: {
            filter: { key },
            update: { $set: { value, updatedAt: new Date() } },
            upsert: true
          }
        }
  )
  if (ops.length) {
    // un solo viaggio verso Atlas invece di uno per campo
    await (await mongoCollection<ContentDoc>('content')).bulkWrite(ops, { ordered: false })
  }
}
