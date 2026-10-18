<template>
  <section class="section-padding">
    <div class="site-container">
      <SectionTitle
        :eyebrow="t('home.values.eyebrow')"
        :title="t('home.values.title')"
        :text="t('home.values.text')"
        align="center"
      />
      <div class="mt-12 grid gap-5 md:grid-cols-3">
        <ValueCard
          v-for="(value, index) in values"
          :key="index"
          :title="value.title"
          :text="value.text"
          :icon="siteContent.values[index % siteContent.values.length].icon"
          :accent="siteContent.values[index % siteContent.values.length].accent"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/Atoms/SectionTitle.vue'
import ValueCard from '~/components/Molecules/ValueCard.vue'
import { siteContent } from '~/data/siteContent'

const { t, list } = useContent()
const values = computed(() => list<{ title: string; text: string }>('home.values.items'))
</script>
