export default defineEventHandler(async (event) => {
  const body = await readBody<{
    name?: string
    email?: string
    reason?: string
    message?: string
  }>(event)

  if (!body.name || !body.email || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Dati mancanti'
    })
  }

  return {
    ok: true,
    message: 'Interesse per il ciclo ricevuto',
    receivedAt: new Date().toISOString()
  }
})
