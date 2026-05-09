<template>
  <article class="group overflow-hidden rounded-soft border border-ink/10 bg-white/60 shadow-line transition duration-200 hover:-translate-y-1 hover:shadow-soft">
    <div class="relative aspect-[4/3] overflow-hidden">
      <div class="absolute inset-0" :style="{ background: palette }" />
      <div class="absolute inset-0 bg-textile opacity-55" />
      <div class="absolute inset-x-6 bottom-6 h-16 rounded-full border border-white/70 bg-white/25 backdrop-blur-sm" />
      <div class="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-white/20 shadow-soft transition duration-300 group-hover:scale-105" />
    </div>
    <div class="p-5">
      <p class="text-xs font-semibold uppercase tracking-[0.14em] text-clay">{{ category }}</p>
      <h3 class="mt-3 font-serif text-2xl font-medium text-ink">{{ title }}</h3>
      <p class="mt-3 leading-7 text-ink/68">{{ text }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  category: string
  text: string
  palette: string
}>()
</script>
