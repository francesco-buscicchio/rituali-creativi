export default defineEventHandler(async (event) => {
  const body = await readBody<{ password?: string }>(event)
  const password = typeof body?.password === 'string' ? body.password : ''

  if (!password || !checkAdminPassword(password)) {
    // rallenta i tentativi a raffica
    await new Promise((resolve) => setTimeout(resolve, 1000))
    throw createError({ statusCode: 401, statusMessage: 'Password non corretta' })
  }

  startAdminSession(event)
  return { ok: true }
})
