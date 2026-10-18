export default defineEventHandler(async (event) => {
  const objectPath = getRouterParam(event, 'path') ?? ''
  const image = await readImage(decodeURIComponent(objectPath))

  if (!image) {
    throw createError({ statusCode: 404, statusMessage: 'Immagine non trovata' })
  }

  setResponseHeaders(event, {
    'Content-Type': image.contentType,
    // i nomi dei file contengono un codice casuale e non vengono mai sovrascritti
    'Cache-Control': 'public, max-age=31536000, immutable',
    'X-Content-Type-Options': 'nosniff'
  })
  return image.data
})
