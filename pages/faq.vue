<template>
  <div>
    <section class="section-padding border-b border-ink/10 bg-linen/34">
      <div class="site-container">
        <SectionTitle
          eyebrow="FAQ"
          title="Domande frequenti"
          text="Le informazioni più utili su incontri, materiali, piccoli gruppi, costi e contatti."
          as="h1"
          align="center"
        />
      </div>
    </section>

    <section class="section-padding">
      <div class="site-container max-w-4xl">
        <FaqAccordion :items="siteContent.faq" />
      </div>
    </section>

    <CTASection
      eyebrow="Hai ancora dubbi?"
      title="Puoi scrivermi anche solo per capire se fa per te."
      text="Non serve avere già un’idea precisa: raccontami cosa cerchi e ti risponderò con le informazioni più adatte."
      primary-label="Scrivimi"
      primary-to="/contatti"
      secondary-label="Scopri gli incontri"
      secondary-to="/incontri"
    />
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/Atoms/SectionTitle.vue'
import CTASection from '~/components/Organisms/CTASection.vue'
import FaqAccordion from '~/components/Organisms/FaqAccordion.vue'
import { siteContent } from '~/data/siteContent'

useSeoMeta({
  title: siteContent.seo.faq.title,
  description: siteContent.seo.faq.description,
  ogTitle: siteContent.seo.faq.title,
  ogDescription: siteContent.seo.faq.description
})
</script>
