import { randomUUID } from 'node:crypto'

export type MediaItem = {
  url: string
  name: string
  size: number
  updatedAt: string
}

const MEDIA_ROUTE = '/api/media/'
const LOCAL_PREFIX = 'admin:uploads:'

// Come per i testi: in sviluppo senza credenziali GCS le immagini restano in .data/
function useLocalStore() {
  if (isGcsConfigured()) {
    return false
  }
  if (import.meta.dev) {
    return true
  }
  throw createError({ statusCode: 500, statusMessage: 'Google Cloud Storage non configurato' })
}

export const IMAGE_TYPES: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/gif': 'gif',
  'image/avif': 'avif'
}

function slugify(name: string) {
  return (
    name
      .replace(/\.[^.]+$/, '')
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 40) || 'immagine'
  )
}

/** Salva un'immagine e ritorna l'indirizzo pubblico con cui mostrarla sul sito. */
export async function saveImage(data: Buffer, contentType: string, originalName: string): Promise<string> {
  const ext = IMAGE_TYPES[contentType]
  const fileName = `${slugify(originalName)}-${randomUUID().slice(0, 8)}.${ext}`
  const objectPath = `${GCS_PUBLIC_IMAGES}${fileName}`

  if (useLocalStore()) {
    await useStorage('data').setItemRaw(`${LOCAL_PREFIX}${fileName}`, data)
    await useStorage('data').setItem(`${LOCAL_PREFIX}${fileName}.meta`, {
      contentType,
      size: data.length,
      updatedAt: new Date().toISOString()
    })
  } else {
    await getBucket()
      .file(objectPath)
      .save(data, {
        contentType,
        resumable: false,
        // il nome contiene un codice casuale: il file non cambia mai, si può tenere in cache a lungo
        metadata: { cacheControl: 'public, max-age=31536000, immutable' }
      })
  }

  return `${MEDIA_ROUTE}${objectPath}`
}

export async function listImages(): Promise<MediaItem[]> {
  if (useLocalStore()) {
    const storage = useStorage('data')
    const keys = (await storage.getKeys('admin:uploads')).filter((key) => key.endsWith('.meta'))
    const items = await Promise.all(
      keys.map(async (key) => {
        const meta = await storage.getItem<{ size: number; updatedAt: string }>(key)
        const name = key.slice(LOCAL_PREFIX.length, -'.meta'.length)
        return {
          url: `${MEDIA_ROUTE}${GCS_PUBLIC_IMAGES}${name}`,
          name,
          size: meta?.size ?? 0,
          updatedAt: meta?.updatedAt ?? ''
        }
      })
    )
    return items.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
  }

  const [files] = await getBucket().getFiles({ prefix: GCS_PUBLIC_IMAGES })
  return files
    .filter((file) => !file.name.endsWith('/'))
    .map((file) => ({
      url: `${MEDIA_ROUTE}${file.name}`,
      name: file.name.slice(GCS_PUBLIC_IMAGES.length),
      size: Number(file.metadata.size ?? 0),
      updatedAt: String(file.metadata.updated ?? '')
    }))
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
}

/** Legge un'immagine pubblica; null se il percorso non è consentito o non esiste. */
export async function readImage(objectPath: string): Promise<{ data: Buffer; contentType: string } | null> {
  if (!objectPath.startsWith(GCS_PUBLIC_IMAGES) || objectPath.includes('..')) {
    return null
  }

  if (useLocalStore()) {
    const name = objectPath.slice(GCS_PUBLIC_IMAGES.length)
    const storage = useStorage('data')
    const raw = await storage.getItemRaw(`${LOCAL_PREFIX}${name}`)
    const meta = await storage.getItem<{ contentType: string }>(`${LOCAL_PREFIX}${name}.meta`)
    return raw && meta ? { data: Buffer.from(raw), contentType: meta.contentType } : null
  }

  const file = getBucket().file(objectPath)
  const [exists] = await file.exists()
  if (!exists) {
    return null
  }
  const [[data], [meta]] = await Promise.all([file.download(), file.getMetadata()])
  return { data, contentType: meta.contentType || 'image/jpeg' }
}
