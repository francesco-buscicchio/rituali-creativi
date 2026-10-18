<template>
  <div class="grid gap-5 md:grid-cols-2">
    <InfoCard
      v-for="(detail, index) in details"
      :key="index"
      :title="detail.title"
      :text="detail.text"
    />
  </div>
</template>

<script setup lang="ts">
import InfoCard from '~/components/Molecules/InfoCard.vue'

const { list } = useContent()
const details = computed(() => list<{ title: string; text: string }>('incontri.how.cards'))
</script>
