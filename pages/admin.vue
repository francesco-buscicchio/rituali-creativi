<template>
  <div class="min-h-screen bg-cream text-ink">
    <!-- Caricamento iniziale -->
    <div v-if="state === 'loading'" class="grid min-h-screen place-items-center text-ink/60">
      <Icon name="lucide:loader-circle" class="h-8 w-8 animate-spin" aria-hidden="true" />
    </div>

    <!-- Accesso -->
    <div v-else-if="state === 'login'" class="grid min-h-screen place-items-center px-4 py-12">
      <form
        class="w-full max-w-md rounded-[2rem] border border-ink/10 bg-white/70 p-8 shadow-soft"
        @submit.prevent="login"
      >
        <img src="/logo-rituali-creativi.png" alt="" class="h-14 w-14 rounded-full object-contain">
        <p class="eyebrow mt-6">Amministrazione</p>
        <h1 class="mt-2 font-serif text-4xl font-medium">Rituali Creativi</h1>
        <p class="mt-3 leading-7 text-ink/70">Inserisci la password per modificare testi e immagini del sito.</p>
        <label for="admin-password" class="mt-6 block text-xs font-semibold uppercase tracking-[0.12em] text-ink/70">
          Password
        </label>
        <input
          id="admin-password"
          v-model="password"
          type="password"
          autocomplete="current-password"
          class="admin-input mt-1.5"
          required
          autofocus
        >
        <p v-if="loginError" class="mt-3 text-sm font-semibold text-clay" role="alert">{{ loginError }}</p>
        <button type="submit" class="admin-button-primary mt-6 w-full !py-3" :disabled="loggingIn || !password">
          <Icon v-if="loggingIn" name="lucide:loader-circle" class="h-4 w-4 animate-spin" aria-hidden="true" />
          Entra
        </button>
      </form>
    </div>

    <!-- Pannello -->
    <div v-else>
      <header class="sticky top-0 z-40 border-b border-ink/10 bg-cream/95 backdrop-blur">
        <div class="mx-auto flex min-h-16 max-w-[1680px] flex-wrap items-center gap-x-6 gap-y-2 px-4 py-2 sm:px-6">
          <div class="flex items-center gap-3">
            <img src="/logo-rituali-creativi.png" alt="" class="h-9 w-9 rounded-full object-contain">
            <div>
              <p class="font-serif text-xl font-medium leading-none">Rituali Creativi</p>
              <p class="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-clay">Amministrazione</p>
            </div>
          </div>

          <div class="ml-auto flex flex-wrap items-center gap-3">
            <p v-if="saveMessage" class="text-sm font-semibold" :class="saveError ? 'text-clay' : 'text-moss'" role="status">
              {{ saveMessage }}
            </p>
            <p v-else-if="dirtyKeys.length" class="text-sm text-ink/70">
              {{ dirtyKeys.length === 1 ? '1 modifica da salvare' : `${dirtyKeys.length} modifiche da salvare` }}
            </p>
            <button v-if="dirtyKeys.length" type="button" class="admin-button-secondary" :disabled="saving" @click="discard">
              Annulla modifiche
            </button>
            <button type="button" class="admin-button-primary !px-5" :disabled="saving || !dirtyKeys.length" @click="save">
              <Icon
                :name="saving ? 'lucide:loader-circle' : 'lucide:save'"
                class="h-4 w-4"
                :class="{ 'animate-spin': saving }"
                aria-hidden="true"
              />
              Salva
            </button>
            <a href="/" target="_blank" rel="noopener" class="admin-button-secondary">
              <Icon name="lucide:external-link" class="h-4 w-4" aria-hidden="true" />
              Vai al sito
            </a>
            <button type="button" class="admin-icon-button !h-9 !w-9" title="Esci" aria-label="Esci" @click="logout">
              <Icon name="lucide:log-out" class="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div class="mx-auto grid max-w-[1680px] gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[300px_1fr]">
        <aside class="lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
          <div class="rounded-[1.5rem] border border-ink/10 bg-white/70 p-3">
            <div class="relative mb-2">
              <Icon name="lucide:search" class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" aria-hidden="true" />
              <input
                v-model="search"
                type="search"
                placeholder="Cerca un testo…"
                class="admin-input !rounded-full !py-2 pl-9 text-sm"
                aria-label="Cerca un testo"
              >
            </div>
            <nav aria-label="Sezioni del sito">
              <div v-for="page in pages" :key="page.name" class="mt-3 first:mt-1">
                <p class="px-3 pb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-clay">{{ page.name }}</p>
                <button
                  v-for="group in page.groups"
                  :key="group.id"
                  type="button"
                  class="flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2 text-left text-sm transition"
                  :class="group.id === activeId ? 'bg-ink text-cream' : 'text-ink/80 hover:bg-linen/60'"
                  @click="select(group.id)"
                >
                  <span>{{ group.title }}</span>
                  <span
                    v-if="dirtyGroups.has(group.id)"
                    class="h-2 w-2 shrink-0 rounded-full bg-terracotta"
                    title="Modifiche non salvate"
                  />
                </button>
              </div>
              <p v-if="!pages.length" class="px-3 py-4 text-sm text-ink/60">Nessun testo trovato.</p>
            </nav>
          </div>
        </aside>

        <main v-if="activeGroup" class="min-w-0">
          <div class="rounded-[1.5rem] border border-ink/10 bg-white/70 p-5 sm:p-8">
            <div class="flex flex-wrap items-start justify-between gap-4 border-b border-ink/10 pb-5">
              <div>
                <p class="eyebrow">{{ activeGroup.page }}</p>
                <h1 class="mt-2 font-serif text-4xl font-medium">{{ activeGroup.title }}</h1>
                <p class="mt-2 text-sm text-ink/60">
                  I campi evidenziati sono diversi dall'originale. Le modifiche vanno online appena premi “Salva”.
                </p>
              </div>
              <a
                v-if="activeGroup.path"
                :href="activeGroup.path"
                target="_blank"
                rel="noopener"
                class="admin-button-secondary"
              >
                <Icon name="lucide:eye" class="h-4 w-4" aria-hidden="true" />
                Vedi sul sito
              </a>
            </div>

            <div class="mt-6 grid gap-x-6 gap-y-6 xl:grid-cols-2">
              <div
                v-for="field in activeGroup.fields"
                :key="field.key"
                :class="{ 'xl:col-span-2': field.type === 'textarea' || field.type === 'list' }"
              >
                <AdminImageField
                  v-if="field.type === 'image'"
                  :field="field"
                  :model-value="draft[field.key] as string"
                  @update:model-value="draft[field.key] = $event"
                  @pick="openLibrary(field.key)"
                  @uploaded="libraryLoaded = false"
                />
                <AdminListField
                  v-else-if="field.type === 'list'"
                  :field="field"
                  :model-value="draft[field.key] as Record<string, string>[]"
                  @update:model-value="draft[field.key] = $event"
                />
                <AdminTextField
                  v-else
                  :field="field"
                  :model-value="draft[field.key] as string"
                  @update:model-value="draft[field.key] = $event"
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      <!-- Libreria immagini -->
      <div
        v-if="libraryFor"
        class="fixed inset-0 z-50 grid place-items-center bg-ink/50 p-4"
        @click.self="libraryFor = null"
      >
        <div class="flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-[1.5rem] bg-cream shadow-soft">
          <div class="flex items-center justify-between gap-4 border-b border-ink/10 px-6 py-4">
            <div>
              <h2 class="font-serif text-2xl font-medium">Libreria immagini</h2>
              <p class="text-sm text-ink/60">Le foto caricate dall'admin e quelle originali del sito.</p>
            </div>
            <button type="button" class="admin-icon-button !h-10 !w-10" aria-label="Chiudi" @click="libraryFor = null">
              <Icon name="lucide:x" class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div class="overflow-y-auto p-6">
            <div v-if="libraryLoading" class="grid place-items-center py-16 text-ink/60">
              <Icon name="lucide:loader-circle" class="h-8 w-8 animate-spin" aria-hidden="true" />
            </div>
            <template v-else>
              <p v-if="libraryError" class="mb-4 text-sm font-semibold text-clay">{{ libraryError }}</p>
              <template v-for="section in librarySections" :key="section.title">
                <p class="eyebrow mb-3 mt-6 first:mt-0">{{ section.title }}</p>
                <p v-if="!section.images.length" class="text-sm text-ink/60">
                  Nessuna immagine caricata finora: usa “Carica dal computer”.
                </p>
                <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                  <button
                    v-for="image in section.images"
                    :key="image"
                    type="button"
                    class="admin-checker group relative aspect-square overflow-hidden rounded-xl border-2 transition"
                    :class="draft[libraryFor] === image ? 'border-terracotta' : 'border-transparent hover:border-ink/30'"
                    @click="choose(image)"
                  >
                    <img :src="image" alt="" class="h-full w-full object-cover" loading="lazy">
                    <span
                      v-if="draft[libraryFor] === image"
                      class="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-terracotta text-white"
                    >
                      <Icon name="lucide:check" class="h-4 w-4" aria-hidden="true" />
                    </span>
                  </button>
                </div>
              </template>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AdminImageField from '~/components/Admin/AdminImageField.vue'
import AdminListField from '~/components/Admin/AdminListField.vue'
import AdminTextField from '~/components/Admin/AdminTextField.vue'
import { CONTENT_FIELDS, CONTENT_GROUPS } from '~/data/contentSchema'
import type { ContentField, ContentValue } from '~/data/contentSchema'

definePageMeta({ layout: false })
useHead({
  title: 'Amministrazione',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }]
})

type MediaItem = { url: string; name: string; size: number; updatedAt: string }

const state = ref<'loading' | 'login' | 'ready'>('loading')
const password = ref('')
const loggingIn = ref(false)
const loginError = ref('')

// contenuti mostrati nel sito (condivisi con il resto dell'app)
const siteContent = useState<Record<string, ContentValue> | null>('site-content', () => null)
// valori in modifica: sempre il contenuto effettivo (salvato o originale)
const draft = reactive<Record<string, ContentValue>>({})
const baseline = ref<Record<string, string>>({})

const activeId = ref(CONTENT_GROUPS[0].id)
const search = ref('')
const saving = ref(false)
const saveMessage = ref('')
const saveError = ref(false)

function clone(value: ContentValue): ContentValue {
  return Array.isArray(value) ? value.map((item) => ({ ...item })) : value
}

function effective(field: ContentField, saved: Record<string, ContentValue>): ContentValue {
  const value = saved[field.key]
  if (field.type === 'list') {
    if (!Array.isArray(value) || !value.length) {
      return clone(field.default)
    }
    return value.map((item) => Object.fromEntries(field.fields.map((sub) => [sub.key, item[sub.key] ?? ''])))
  }
  return typeof value === 'string' && value.trim() !== '' ? value : field.default
}

function applySaved(saved: Record<string, ContentValue>) {
  const next: Record<string, string> = {}
  for (const field of CONTENT_FIELDS.values()) {
    const value = effective(field, saved)
    draft[field.key] = clone(value)
    next[field.key] = JSON.stringify(value)
  }
  baseline.value = next
}

const dirtyKeys = computed(() =>
  Object.keys(baseline.value).filter((key) => JSON.stringify(draft[key]) !== baseline.value[key])
)
const dirtyGroups = computed(() => {
  const dirty = new Set(dirtyKeys.value)
  return new Set(CONTENT_GROUPS.filter((g) => g.fields.some((f) => dirty.has(f.key))).map((g) => g.id))
})

function normalize(text: string) {
  return text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
}

const visibleGroups = computed(() => {
  const query = normalize(search.value.trim())
  if (!query) {
    return CONTENT_GROUPS
  }
  return CONTENT_GROUPS.filter((group) =>
    normalize(`${group.page} ${group.title}`).includes(query) ||
    group.fields.some((field) => normalize(`${field.label} ${JSON.stringify(draft[field.key] ?? '')}`).includes(query))
  )
})

const pages = computed(() => {
  const byPage = new Map<string, typeof CONTENT_GROUPS>()
  for (const group of visibleGroups.value) {
    byPage.set(group.page, [...(byPage.get(group.page) ?? []), group])
  }
  return [...byPage.entries()].map(([name, groups]) => ({ name, groups }))
})

const activeGroup = computed(() => CONTENT_GROUPS.find((group) => group.id === activeId.value))

watch(visibleGroups, (groups) => {
  if (groups.length && !groups.some((group) => group.id === activeId.value)) {
    activeId.value = groups[0].id
  }
})

function select(id: string) {
  activeId.value = id
  if (import.meta.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    history.replaceState(null, '', `#${id}`)
  }
}

function errorMessage(error: unknown, fallback: string) {
  const fetchError = error as { data?: { statusMessage?: string }; statusMessage?: string }
  return fetchError.data?.statusMessage || fetchError.statusMessage || fallback
}

async function loadContent() {
  const saved = await $fetch<Record<string, ContentValue>>('/api/admin/content')
  applySaved(saved)
  siteContent.value = saved
  state.value = 'ready'
}

async function login() {
  loggingIn.value = true
  loginError.value = ''
  try {
    await $fetch('/api/admin/login', { method: 'POST', body: { password: password.value } })
    password.value = ''
    await loadContent()
  } catch (error) {
    loginError.value = errorMessage(error, 'Accesso non riuscito')
  } finally {
    loggingIn.value = false
  }
}

async function logout() {
  if (dirtyKeys.value.length && !confirm('Ci sono modifiche non salvate. Vuoi uscire lo stesso?')) {
    return
  }
  await $fetch('/api/admin/logout', { method: 'POST' })
  state.value = 'login'
}

let messageTimer: ReturnType<typeof setTimeout> | undefined
function showMessage(text: string, isError = false) {
  saveMessage.value = text
  saveError.value = isError
  clearTimeout(messageTimer)
  messageTimer = setTimeout(() => (saveMessage.value = ''), isError ? 8000 : 3500)
}

async function save() {
  saving.value = true
  const values: Record<string, ContentValue> = {}
  for (const key of dirtyKeys.value) {
    const field = CONTENT_FIELDS.get(key)
    // uguale all'originale = si cancella dal database e torna il default
    const same = field && JSON.stringify(draft[key]) === JSON.stringify(field.default)
    values[key] = same ? (field.type === 'list' ? [] : '') : draft[key]
  }
  try {
    const result = await $fetch<{ content: Record<string, ContentValue> }>('/api/admin/content', {
      method: 'PUT',
      body: { values }
    })
    applySaved(result.content)
    siteContent.value = result.content
    showMessage('Modifiche salvate ✓')
  } catch (error) {
    if ((error as { statusCode?: number }).statusCode === 401) {
      state.value = 'login'
      loginError.value = 'La sessione è scaduta: accedi di nuovo, le modifiche restano qui.'
      return
    }
    showMessage(errorMessage(error, 'Salvataggio non riuscito, riprova.'), true)
  } finally {
    saving.value = false
  }
}

function discard() {
  if (!confirm('Vuoi annullare tutte le modifiche non salvate?')) {
    return
  }
  for (const key of Object.keys(baseline.value)) {
    draft[key] = JSON.parse(baseline.value[key])
  }
}

// Libreria immagini
const libraryFor = ref<string | null>(null)
const libraryLoaded = ref(false)
const libraryLoading = ref(false)
const libraryError = ref('')
const uploaded = ref<MediaItem[]>([])

const originalImages = [
  ...new Set(
    [...CONTENT_FIELDS.values()].filter((field) => field.type === 'image').map((field) => field.default as string)
  )
]

const librarySections = computed(() => [
  { title: 'Caricate dall\'admin', images: uploaded.value.map((item) => item.url) },
  { title: 'Originali del sito', images: originalImages }
])

async function openLibrary(key: string) {
  libraryFor.value = key
  if (libraryLoaded.value) {
    return
  }
  libraryLoading.value = true
  libraryError.value = ''
  try {
    uploaded.value = await $fetch<MediaItem[]>('/api/admin/media')
    libraryLoaded.value = true
  } catch (error) {
    libraryError.value = errorMessage(error, 'Impossibile leggere le immagini caricate.')
  } finally {
    libraryLoading.value = false
  }
}

function choose(image: string) {
  if (libraryFor.value) {
    draft[libraryFor.value] = image
  }
  libraryFor.value = null
}

function selectFromHash() {
  const hash = location.hash.slice(1)
  if (CONTENT_GROUPS.some((group) => group.id === hash)) {
    activeId.value = hash
  }
}

function onBeforeUnload(event: BeforeUnloadEvent) {
  if (dirtyKeys.value.length) {
    event.preventDefault()
  }
}

function onKeydown(event: KeyboardEvent) {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 's' && state.value === 'ready') {
    event.preventDefault()
    if (dirtyKeys.value.length && !saving.value) {
      save()
    }
  }
  if (event.key === 'Escape') {
    libraryFor.value = null
  }
}

onMounted(async () => {
  window.addEventListener('beforeunload', onBeforeUnload)
  window.addEventListener('keydown', onKeydown)
  window.addEventListener('hashchange', selectFromHash)
  selectFromHash()
  try {
    const { authenticated } = await $fetch<{ authenticated: boolean }>('/api/admin/session')
    if (authenticated) {
      await loadContent()
    } else {
      state.value = 'login'
    }
  } catch {
    state.value = 'login'
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('beforeunload', onBeforeUnload)
  window.removeEventListener('keydown', onKeydown)
  window.removeEventListener('hashchange', selectFromHash)
})
</script>
