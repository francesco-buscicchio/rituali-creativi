<template>
  <article class="rounded-soft border border-ink/10 bg-white/55 p-6 shadow-line transition duration-200 hover:-translate-y-1 hover:bg-white/72">
    <div :class="iconClasses" class="mb-6 flex h-12 w-12 items-center justify-center rounded-full">
      <Icon :name="icon" class="h-5 w-5" aria-hidden="true" />
    </div>
    <h3 class="font-serif text-2xl font-medium text-ink">{{ title }}</h3>
    <p class="mt-3 leading-7 text-ink/68">{{ text }}</p>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  text: string
  icon: string
  accent: 'sage' | 'terracotta' | 'powder'
}>()

const iconClasses = computed(() => {
  const classes = {
    sage: 'bg-sage/25 text-moss',
    terracotta: 'bg-terracotta/18 text-clay',
    powder: 'bg-powder/24 text-ink'
  }

  return classes[props.accent]
})
</script>
