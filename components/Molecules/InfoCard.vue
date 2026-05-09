<template>
  <article class="rounded-soft border border-ink/10 bg-white/55 p-6 shadow-line">
    <p v-if="label" class="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-clay">
      {{ label }}
    </p>
    <h3 class="font-serif text-2xl font-medium text-ink">{{ title }}</h3>
    <p class="mt-3 leading-7 text-ink/68">{{ text }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  text: string
  label?: string
}>()
</script>
