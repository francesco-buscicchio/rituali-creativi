<template>
  <a
    :href="href"
    target="_blank"
    rel="noreferrer"
    class="inline-flex items-center gap-3 rounded-full border border-ink/10 bg-white/55 px-4 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-white"
  >
    <Icon :name="icon" class="h-4 w-4" aria-hidden="true" />
    <span>{{ label }}</span>
    <span class="text-ink/46">{{ handle }}</span>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href: string
  label: string
  handle: string
  icon: string
}>()
</script>
