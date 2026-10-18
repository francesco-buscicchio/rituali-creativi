export default defineEventHandler((event) => {
  return { authenticated: isAdmin(event) }
})
