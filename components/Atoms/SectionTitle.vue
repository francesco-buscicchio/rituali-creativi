<template>
  <div :class="alignClasses">
    <p v-if="eyebrow" class="eyebrow mb-3">{{ eyebrow }}</p>
    <component
      :is="as"
      class="font-serif text-4xl font-medium leading-tight text-ink text-balance sm:text-5xl"
    >
      {{ title }}
    </component>
    <p v-if="text" class="mt-5 max-w-3xl text-base leading-8 text-ink/72 sm:text-lg">
      {{ text }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  eyebrow?: string
  title: string
  text?: string
  align?: 'left' | 'center'
  as?: 'h1' | 'h2' | 'h3'
}>(), {
  align: 'left',
  as: 'h2'
})

const alignClasses = computed(() =>
  props.align === 'center'
    ? 'mx-auto max-w-4xl text-center [&>p]:mx-auto'
    : 'max-w-4xl'
)
</script>
