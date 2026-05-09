<template>
  <label class="block">
    <span class="mb-2 block text-sm font-semibold text-ink">{{ label }}</span>
    <input
      v-model="model"
      :type="type"
      :name="name"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      :required="required"
      :aria-invalid="Boolean(error)"
      :aria-describedby="error ? `${name}-error` : undefined"
      class="min-h-12 w-full rounded-2xl border border-ink/12 bg-white/70 px-4 text-base text-ink shadow-line transition placeholder:text-ink/38 hover:border-ink/22 focus:border-terracotta"
    >
    <span v-if="error" :id="`${name}-error`" class="mt-2 block text-sm text-clay">
      {{ error }}
    </span>
  </label>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  label: string
  name: string
  type?: 'text' | 'email' | 'tel'
  autocomplete?: string
  placeholder?: string
  required?: boolean
  error?: string
}>(), {
  type: 'text',
  required: false
})

const model = defineModel<string>({ default: '' })
</script>
