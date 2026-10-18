<template>
  <div>
    <div class="mb-1.5 flex items-baseline justify-between gap-3">
      <label :for="id" class="text-xs font-semibold uppercase tracking-[0.12em] text-ink/70">
        {{ field.label }}
      </label>
      <button
        v-if="modelValue !== field.default"
        type="button"
        class="shrink-0 text-xs font-semibold text-clay hover:text-terracotta"
        @click="$emit('update:modelValue', field.default)"
      >
        Ripristina originale
      </button>
    </div>
    <textarea
      v-if="field.type === 'textarea'"
      :id="id"
      :value="modelValue"
      :rows="rows"
      class="admin-input resize-y leading-6"
      :class="{ 'admin-input-changed': modelValue !== field.default }"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
    <input
      v-else
      :id="id"
      :value="modelValue"
      type="text"
      class="admin-input"
      :class="{ 'admin-input-changed': modelValue !== field.default }"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
    <p v-if="field.hint" class="mt-1.5 text-xs leading-5 text-ink/60">{{ field.hint }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  field: { key: string; label: string; type: 'text' | 'textarea'; default: string; hint?: string }
  modelValue: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()

const id = computed(() => `field-${props.field.key.replace(/\W/g, '-')}`)
const rows = computed(() => Math.min(10, Math.max(3, Math.ceil(props.modelValue.length / 90))))
</script>
