import type { ContentValue } from '~/data/contentSchema'

// Carica una volta i contenuti salvati dall'admin: sul server a ogni richiesta,
// nel browser arrivano già pronti nel payload della pagina
export default defineNuxtPlugin(async () => {
  const saved = useState<Record<string, ContentValue> | null>('site-content', () => null)
  if (saved.value === null) {
    saved.value = await $fetch<Record<string, ContentValue>>('/api/content').catch(() => ({}))
  }
})
