<template>
  <div>
    <div class="mb-3 flex items-baseline justify-between gap-3">
      <p class="text-xs font-semibold uppercase tracking-[0.12em] text-ink/70">{{ field.label }}</p>
      <button
        v-if="changed"
        type="button"
        class="shrink-0 text-xs font-semibold text-clay hover:text-terracotta"
        @click="$emit('update:modelValue', clone(field.default))"
      >
        Ripristina originale
      </button>
    </div>
    <p v-if="field.hint" class="-mt-1 mb-3 text-xs leading-5 text-ink/60">{{ field.hint }}</p>

    <div class="grid gap-3" :class="{ 'xl:grid-cols-2': compact }">
      <div
        v-for="(item, index) in modelValue"
        :key="index"
        class="rounded-2xl border border-ink/10 bg-cream/60 p-4"
      >
        <div class="mb-3 flex items-center justify-between gap-3">
          <p class="text-sm font-semibold text-ink">{{ field.itemLabel }} {{ index + 1 }}</p>
          <div class="flex items-center gap-1">
            <button
              type="button"
              class="admin-icon-button"
              :disabled="index === 0"
              title="Sposta su"
              aria-label="Sposta su"
              @click="move(index, -1)"
            >
              <Icon name="lucide:arrow-up" class="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              class="admin-icon-button"
              :disabled="index === modelValue.length - 1"
              title="Sposta giù"
              aria-label="Sposta giù"
              @click="move(index, 1)"
            >
              <Icon name="lucide:arrow-down" class="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              class="admin-icon-button hover:!border-clay/40 hover:!text-clay"
              title="Elimina"
              aria-label="Elimina"
              @click="remove(index)"
            >
              <Icon name="lucide:trash-2" class="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div class="grid gap-3">
          <div v-for="sub in field.fields" :key="sub.key">
            <label :for="`${baseId}-${index}-${sub.key}`" class="mb-1 block text-xs font-medium text-ink/60">
              {{ sub.label }}
            </label>
            <textarea
              v-if="sub.type === 'textarea'"
              :id="`${baseId}-${index}-${sub.key}`"
              :value="item[sub.key]"
              :rows="Math.min(8, Math.max(2, Math.ceil((item[sub.key] ?? '').length / 80)))"
              class="admin-input resize-y bg-white leading-6"
              @input="update(index, sub.key, ($event.target as HTMLTextAreaElement).value)"
            />
            <input
              v-else
              :id="`${baseId}-${index}-${sub.key}`"
              :value="item[sub.key]"
              type="text"
              class="admin-input bg-white"
              @input="update(index, sub.key, ($event.target as HTMLInputElement).value)"
            >
          </div>
        </div>
      </div>
    </div>

    <button
      type="button"
      class="mt-3 inline-flex items-center gap-2 rounded-full border border-dashed border-ink/30 px-4 py-2 text-sm font-semibold text-ink/70 transition hover:border-terracotta hover:text-terracotta"
      @click="add"
    >
      <Icon name="lucide:plus" class="h-4 w-4" aria-hidden="true" />
      Aggiungi {{ field.itemLabel.toLowerCase() }}
    </button>
  </div>
</template>

<script setup lang="ts">
type Item = Record<string, string>

const props = defineProps<{
  field: {
    key: string
    label: string
    itemLabel: string
    fields: { key: string; label: string; type: 'text' | 'textarea' }[]
    default: Item[]
    hint?: string
  }
  modelValue: Item[]
}>()

const emit = defineEmits<{
  'update:modelValue': [value: Item[]]
}>()

const baseId = computed(() => `list-${props.field.key.replace(/\W/g, '-')}`)
const changed = computed(() => JSON.stringify(props.modelValue) !== JSON.stringify(props.field.default))
// liste con voci brevi (una sola riga di testo) stanno su due colonne
const compact = computed(() => props.field.fields.every((sub) => sub.type === 'text') || props.field.fields.length > 1)

function clone(items: Item[]) {
  return items.map((item) => ({ ...item }))
}

function update(index: number, key: string, value: string) {
  const items = clone(props.modelValue)
  items[index] = { ...items[index], [key]: value }
  emit('update:modelValue', items)
}

function move(index: number, direction: -1 | 1) {
  const items = clone(props.modelValue)
  const [item] = items.splice(index, 1)
  items.splice(index + direction, 0, item)
  emit('update:modelValue', items)
}

function remove(index: number) {
  const items = clone(props.modelValue)
  items.splice(index, 1)
  emit('update:modelValue', items)
}

function add() {
  const empty = Object.fromEntries(props.field.fields.map((sub) => [sub.key, '']))
  emit('update:modelValue', [...clone(props.modelValue), empty])
}
</script>
