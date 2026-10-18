import { Storage } from '@google-cloud/storage'
import { GCS_SA_KEY_B64_CODE_PART } from '../config/gcs-key-code-part'

// Cartella del bucket condiviso dedicata a questo sito; solo quello che sta
// sotto public/ è raggiungibile da /api/media
export const GCS_PREFIX = 'rituali-creativi/'
export const GCS_PUBLIC_IMAGES = `${GCS_PREFIX}public/images/`

let storage: Storage | null = null

function keyBase64() {
  if (process.env.GCS_SA_KEY_B64) {
    return process.env.GCS_SA_KEY_B64
  }
  const envPart = process.env.GCS_SA_KEY_B64_ENV_PART
  if (!envPart || !GCS_SA_KEY_B64_CODE_PART) {
    return null
  }
  return `${GCS_SA_KEY_B64_CODE_PART}${envPart}`
}

export function isGcsConfigured() {
  return Boolean(process.env.GCS_BUCKET && keyBase64())
}

function getStorage() {
  if (storage) {
    return storage
  }
  const b64 = keyBase64()
  if (!b64) {
    throw new Error('Chiave Google Cloud Storage non configurata')
  }
  const credentials = JSON.parse(Buffer.from(b64.trim(), 'base64').toString('utf-8'))
  storage = new Storage({
    projectId: process.env.GCS_PROJECT_ID || credentials.project_id,
    credentials
  })
  return storage
}

export function getBucket() {
  const name = process.env.GCS_BUCKET
  if (!name) {
    throw new Error('GCS_BUCKET non configurata')
  }
  return getStorage().bucket(name)
}
