<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="classes"
  >
    <slot />
    <Icon v-if="icon" :name="icon" class="h-4 w-4" aria-hidden="true" />
  </NuxtLink>
  <a
    v-else-if="href"
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noreferrer' : undefined"
    :class="classes"
  >
    <slot />
    <Icon v-if="icon" :name="icon" class="h-4 w-4" aria-hidden="true" />
  </a>
  <button
    v-else
    :type="type"
    :disabled="disabled"
    :class="classes"
  >
    <slot />
    <Icon v-if="icon" :name="icon" class="h-4 w-4" aria-hidden="true" />
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  to?: string
  href?: string
  icon?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  external?: boolean
}>(), {
  type: 'button',
  disabled: false,
  external: false
})

const classes = computed(() => [
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-white shadow-soft transition duration-200 hover:-translate-y-0.5 hover:bg-clay disabled:pointer-events-none disabled:opacity-60',
  props.disabled ? 'pointer-events-none opacity-60' : ''
])
</script>
