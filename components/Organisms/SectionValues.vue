<template>
  <section class="section-padding">
    <div class="site-container">
      <SectionTitle
        eyebrow="Valori"
        title="Un modo più gentile di stare nel fare"
        text="Ogni incontro tiene insieme apprendimento, ascolto e manualità. Non serve fare bene, serve sentirsi a proprio agio."
        align="center"
      />
      <div class="mt-12 grid gap-5 md:grid-cols-3">
        <ValueCard
          v-for="value in siteContent.values"
          :key="value.title"
          :title="value.title"
          :text="value.text"
          :icon="value.icon"
          :accent="value.accent"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/Atoms/SectionTitle.vue'
import ValueCard from '~/components/Molecules/ValueCard.vue'
import { siteContent } from '~/data/siteContent'
</script>
