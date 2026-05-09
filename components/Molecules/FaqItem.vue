<template>
  <div class="border-b border-ink/10">
    <button
      type="button"
      class="flex w-full items-center justify-between gap-5 py-5 text-left"
      :aria-expanded="open"
      :aria-controls="panelId"
      @click="$emit('toggle')"
    >
      <span class="font-serif text-xl font-medium text-ink">{{ question }}</span>
      <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/70 text-ink shadow-line">
        <Icon :name="open ? 'lucide:minus' : 'lucide:plus'" class="h-4 w-4" aria-hidden="true" />
      </span>
    </button>
    <div
      v-show="open"
      :id="panelId"
      class="pb-6 pr-12 leading-7 text-ink/68"
    >
      {{ answer }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  question: string
  answer: string
  open: boolean
  panelId: string
}>()

defineEmits<{
  toggle: []
}>()
</script>
