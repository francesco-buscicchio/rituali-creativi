export default defineEventHandler(async () => {
  try {
    return await readContent()
  } catch (error) {
    // se il database non risponde il sito resta online con i testi originali
    console.error('Lettura contenuti non riuscita:', error)
    return {}
  }
})
