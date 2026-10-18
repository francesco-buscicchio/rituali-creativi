<template>
  <div>
    <section class="section-padding border-b border-ink/10 bg-linen/34">
      <div class="site-container">
        <SectionTitle
          :eyebrow="t('faq.hero.eyebrow')"
          :title="t('faq.hero.title')"
          :text="t('faq.hero.text')"
          as="h1"
          align="center"
        />
      </div>
    </section>

    <section class="section-padding">
      <div class="site-container max-w-4xl">
        <FaqAccordion :items="faqItems" />
      </div>
    </section>

    <CTASection
      :eyebrow="t('faq.cta.eyebrow')"
      :title="t('faq.cta.title')"
      :text="t('faq.cta.text')"
      :primary-label="t('faq.cta.primary')"
      primary-to="/contatti"
      :secondary-label="t('faq.cta.secondary')"
      secondary-to="/incontri"
    />
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/Atoms/SectionTitle.vue'
import CTASection from '~/components/Organisms/CTASection.vue'
import FaqAccordion from '~/components/Organisms/FaqAccordion.vue'

const { t, list } = useContent()
const faqItems = computed(() => list<{ question: string; answer: string }>('faq.items'))

useSeoMeta({
  title: () => t('seo.faq.title'),
  description: () => t('seo.faq.description'),
  ogTitle: () => t('seo.faq.title'),
  ogDescription: () => t('seo.faq.description')
})
</script>
