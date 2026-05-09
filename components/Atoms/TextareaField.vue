<template>
  <label class="block">
    <span class="mb-2 block text-sm font-semibold text-ink">{{ label }}</span>
    <textarea
      v-model="model"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :rows="rows"
      :aria-invalid="Boolean(error)"
      :aria-describedby="error ? `${name}-error` : undefined"
      class="w-full resize-y rounded-2xl border border-ink/12 bg-white/70 px-4 py-3 text-base leading-7 text-ink shadow-line transition placeholder:text-ink/38 hover:border-ink/22 focus:border-terracotta"
    />
    <span v-if="error" :id="`${name}-error`" class="mt-2 block text-sm text-clay">
      {{ error }}
    </span>
  </label>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  label: string
  name: string
  placeholder?: string
  required?: boolean
  rows?: number
  error?: string
}>(), {
  required: false,
  rows: 5
})

const model = defineModel<string>({ default: '' })
</script>
