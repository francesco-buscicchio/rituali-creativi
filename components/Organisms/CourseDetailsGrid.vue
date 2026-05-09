<template>
  <div class="grid gap-5 md:grid-cols-2">
    <InfoCard
      v-for="detail in siteContent.course.details"
      :key="detail.title"
      :title="detail.title"
      :text="detail.text"
    />
  </div>
</template>

<script setup lang="ts">
import InfoCard from '~/components/Molecules/InfoCard.vue'
import { siteContent } from '~/data/siteContent'
</script>
