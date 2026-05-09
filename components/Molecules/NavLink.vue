<template>
  <NuxtLink
    :to="to"
    class="rounded-full px-3 py-2 text-sm font-medium text-ink/72 transition hover:bg-white/60 hover:text-ink"
    :class="{ 'bg-white/70 text-ink shadow-line': isActive }"
    @click="$emit('navigate')"
  >
    {{ label }}
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string
  to: string
}>()

defineEmits<{
  navigate: []
}>()

const route = useRoute()
const isActive = computed(() =>
  props.to === '/' ? route.path === '/' : route.path.startsWith(props.to)
)
</script>
