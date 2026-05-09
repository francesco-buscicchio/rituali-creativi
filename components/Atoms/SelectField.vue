<template>
  <label class="block">
    <span class="mb-2 block text-sm font-semibold text-ink">{{ label }}</span>
    <select
      v-model="model"
      :name="name"
      :required="required"
      :aria-invalid="Boolean(error)"
      :aria-describedby="error ? `${name}-error` : undefined"
      class="min-h-12 w-full rounded-2xl border border-ink/12 bg-white/70 px-4 text-base text-ink shadow-line transition hover:border-ink/22 focus:border-terracotta"
    >
      <option value="" disabled>{{ placeholder }}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <span v-if="error" :id="`${name}-error`" class="mt-2 block text-sm text-clay">
      {{ error }}
    </span>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  name: string
  options: ReadonlyArray<{ label: string; value: string }>
  placeholder: string
  required?: boolean
  error?: string
}>()

const model = defineModel<string>({ default: '' })
</script>
