import { MongoClient } from 'mongodb'
import type { Collection, Db, Document } from 'mongodb'

// Stesso cluster Atlas degli altri progetti, database dedicato.
// Il nome resta nel codice: se fosse anche una variabile d'ambiente con lo
// stesso valore, il secrets scanning di Netlify bloccherebbe il deploy
const DB_NAME = 'RitualiCreativi'

declare global {
  // eslint-disable-next-line no-var
  var __ritualiMongo: Promise<Db> | undefined
}

export function isMongoConfigured() {
  return Boolean(process.env.MONGODB_URI)
}

async function connect(): Promise<Db> {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error('MONGODB_URI non configurata')
  }
  const client = new MongoClient(uri, { maxPoolSize: 10 })
  await client.connect()
  const db = client.db(DB_NAME)
  // idempotente: se l'indice esiste già non fa nulla
  void db.collection('content').createIndex({ key: 1 }, { unique: true }).catch(() => {})
  return db
}

export function getDb(): Promise<Db> {
  // si memorizza la promise: le richieste in parallelo all'avvio condividono la stessa connessione
  if (!globalThis.__ritualiMongo) {
    globalThis.__ritualiMongo = connect().catch((error) => {
      globalThis.__ritualiMongo = undefined
      throw error
    })
  }
  return globalThis.__ritualiMongo
}

export async function mongoCollection<T extends Document = Document>(name: string): Promise<Collection<T>> {
  return (await getDb()).collection<T>(name)
}
