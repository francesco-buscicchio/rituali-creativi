const runtimeEnv = (globalThis as typeof globalThis & {
  process?: { env?: Record<string, string | undefined> }
}).process?.env

export default defineNuxtConfig({
  buildDir: runtimeEnv?.NUXT_BUILD_DIR || '.nuxt',
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/fonts'],
  css: ['~/assets/css/main.css'],
  vite: {
    cacheDir: runtimeEnv?.NUXT_VITE_CACHE_DIR || 'node_modules/.cache/vite'
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'it'
      },
      title: 'Rituali Creativi',
      titleTemplate: '%s | Rituali Creativi',
      meta: [
        { name: 'theme-color', content: '#F7F3EE' },
        { name: 'color-scheme', content: 'light' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '150x150', href: '/logo-rituali-creativi.png' }
      ]
    }
  },
  routeRules: {
    // pannello raggiungibile solo dall'indirizzo, mai indicizzato
    '/admin': { ssr: false, headers: { 'X-Robots-Tag': 'noindex, nofollow' } },
    '/api/admin/**': { headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow' } }
  },
  typescript: {
    strict: true,
    typeCheck: true
  },
  tailwindcss: {
    viewer: false
  }
})
