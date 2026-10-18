// Netlify accetta richieste fino a 6 MB: l'admin ridimensiona le foto prima di inviarle
const MAX_BYTES = 5.5 * 1024 * 1024

export default defineEventHandler(async (event) => {
  requireAdmin(event)
  const parts = await readMultipartFormData(event)
  const file = parts?.find((part) => part.name === 'file' && part.filename)

  if (!file) {
    throw createError({ statusCode: 400, statusMessage: 'Nessun file ricevuto' })
  }
  const contentType = file.type ?? ''
  // niente SVG: potrebbe contenere script
  if (!IMAGE_TYPES[contentType]) {
    throw createError({ statusCode: 400, statusMessage: 'Sono ammesse solo immagini JPG, PNG, WebP, GIF o AVIF' })
  }
  if (file.data.length > MAX_BYTES) {
    throw createError({ statusCode: 413, statusMessage: 'Immagine troppo pesante (massimo 5 MB)' })
  }

  try {
    const url = await saveImage(file.data, contentType, file.filename ?? 'immagine')
    return { url }
  } catch (error) {
    if (isError(error)) {
      throw error
    }
    console.error('Caricamento immagine non riuscito:', error)
    throw createError({ statusCode: 502, statusMessage: 'Caricamento su Google Cloud Storage non riuscito' })
  }
})
