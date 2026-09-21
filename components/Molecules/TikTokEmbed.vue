<template>
  <div class="overflow-hidden rounded-[1.75rem] border border-ink/10 bg-ink shadow-soft">
    <iframe
      :src="src"
      :title="title"
      class="aspect-[9/16] w-full"
      allow="fullscreen; encrypted-media; picture-in-picture"
      allowfullscreen
      loading="lazy"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  videoId: string
  title: string
}>()

const src = computed(() => {
  const params = new URLSearchParams({
    controls: '1',
    progress_bar: '1',
    play_button: '1',
    volume_control: '1',
    fullscreen_button: '1',
    timestamp: '1',
    loop: '0',
    autoplay: '0',
    music_info: '0',
    description: '0',
    rel: '0',
    native_context_menu: '1',
    closed_caption: '1'
  })

  return `https://www.tiktok.com/player/v1/${props.videoId}?${params.toString()}`
})
</script>
