<template>
  <div>
    <div class="mb-1.5 flex items-baseline justify-between gap-3">
      <p class="text-xs font-semibold uppercase tracking-[0.12em] text-ink/70">{{ field.label }}</p>
      <button
        v-if="modelValue !== field.default"
        type="button"
        class="shrink-0 text-xs font-semibold text-clay hover:text-terracotta"
        @click="$emit('update:modelValue', field.default)"
      >
        Ripristina originale
      </button>
    </div>

    <div
      class="flex flex-col gap-4 rounded-2xl border-2 border-dashed p-3 transition sm:flex-row sm:items-center"
      :class="dragging ? 'border-terracotta bg-linen/60' : modelValue !== field.default ? 'border-terracotta/50 bg-white' : 'border-ink/15 bg-white'"
      @dragover.prevent="dragging = true"
      @dragleave="dragging = false"
      @drop.prevent="onDrop"
    >
      <a
        :href="modelValue"
        target="_blank"
        rel="noopener"
        class="admin-checker relative grid aspect-[4/3] w-full shrink-0 place-items-center overflow-hidden rounded-xl border border-ink/10 sm:w-56"
        title="Apri l'immagine a dimensione piena"
      >
        <img
          v-if="modelValue"
          :src="modelValue"
          alt=""
          class="h-full w-full object-contain"
        >
        <span
          v-if="uploading"
          class="absolute inset-0 grid place-items-center bg-white/80 text-ink"
        >
          <Icon name="lucide:loader-circle" class="h-6 w-6 animate-spin" aria-hidden="true" />
        </span>
      </a>
      <div class="min-w-0 flex-1">
        <p class="truncate text-sm font-semibold text-ink" :title="fileName">
          {{ uploading ? 'Caricamento in corso…' : fileName }}
        </p>
        <p class="mt-0.5 text-xs text-ink/60">
          {{ modelValue === field.default ? 'Immagine originale del sito' : 'Immagine personalizzata' }}
        </p>
        <div class="mt-3 flex flex-wrap gap-2">
          <button type="button" class="admin-button-primary" :disabled="uploading" @click="input?.click()">
            <Icon name="lucide:upload" class="h-4 w-4" aria-hidden="true" />
            Carica dal computer
          </button>
          <button type="button" class="admin-button-secondary" :disabled="uploading" @click="$emit('pick')">
            <Icon name="lucide:images" class="h-4 w-4" aria-hidden="true" />
            Libreria
          </button>
        </div>
        <p class="mt-2 text-xs text-ink/50">Oppure trascina qui un file.</p>
      </div>
    </div>

    <input ref="input" type="file" accept="image/jpeg,image/png,image/webp,image/gif,image/avif" class="sr-only" @change="onPick">
    <p v-if="error" class="mt-1.5 text-xs font-semibold text-clay">{{ error }}</p>
    <p v-else-if="field.hint" class="mt-1.5 text-xs leading-5 text-ink/60">{{ field.hint }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  field: { key: string; label: string; type: 'image'; default: string; hint?: string }
  modelValue: string
}>()

const fileName = computed(() => decodeURIComponent(props.modelValue.split('/').pop() ?? ''))

const emit = defineEmits<{
  'update:modelValue': [value: string]
  pick: []
  uploaded: []
}>()

const input = ref<HTMLInputElement | null>(null)
const dragging = ref(false)
const uploading = ref(false)
const error = ref('')

const MAX_SIDE = 2400
const ACCEPTED = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif']

/**
 * Le foto della macchina fotografica pesano anche 10 MB: si ridimensionano nel
 * browser prima dell'invio, così restano sotto il limite di Netlify e il sito è più veloce.
 */
async function prepare(file: File): Promise<File> {
  // le GIF possono essere animate: si caricano così come sono
  if (file.type === 'image/gif') {
    return file
  }
  const bitmap = await createImageBitmap(file)
  const scale = Math.min(1, MAX_SIDE / Math.max(bitmap.width, bitmap.height))
  if (scale === 1 && file.size <= 1.5 * 1024 * 1024) {
    bitmap.close()
    return file
  }
  const canvas = document.createElement('canvas')
  canvas.width = Math.round(bitmap.width * scale)
  canvas.height = Math.round(bitmap.height * scale)
  canvas.getContext('2d')?.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
  bitmap.close()
  // PNG e WebP possono avere la trasparenza (es. il logo): restano WebP
  const type = file.type === 'image/png' || file.type === 'image/webp' ? 'image/webp' : 'image/jpeg'
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, type, 0.86))
  if (!blob) {
    return file
  }
  const ext = blob.type === 'image/webp' ? 'webp' : blob.type === 'image/png' ? 'png' : 'jpg'
  return new File([blob], file.name.replace(/\.[^.]+$/, '') + `.${ext}`, { type: blob.type })
}

async function upload(file: File | undefined) {
  error.value = ''
  if (!file) {
    return
  }
  if (!ACCEPTED.includes(file.type)) {
    error.value = 'Formato non supportato: usa JPG, PNG, WebP o GIF.'
    return
  }
  uploading.value = true
  try {
    const body = new FormData()
    body.append('file', await prepare(file))
    const { url } = await $fetch<{ url: string }>('/api/admin/upload', { method: 'POST', body })
    emit('update:modelValue', url)
    emit('uploaded')
  } catch (err) {
    const fetchError = err as { data?: { statusMessage?: string }; statusMessage?: string }
    error.value = fetchError.data?.statusMessage || fetchError.statusMessage || 'Caricamento non riuscito, riprova.'
  } finally {
    uploading.value = false
    if (input.value) {
      input.value.value = ''
    }
  }
}

function onPick(event: Event) {
  upload((event.target as HTMLInputElement).files?.[0])
}

function onDrop(event: DragEvent) {
  dragging.value = false
  upload(event.dataTransfer?.files?.[0])
}
</script>
