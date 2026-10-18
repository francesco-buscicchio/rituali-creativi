<template>
  <div>
    <section class="section-padding border-b border-ink/10 bg-linen/34">
      <div class="site-container grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-start">
        <SectionTitle
          :eyebrow="t('progetto.hero.eyebrow')"
          :title="t('progetto.hero.title')"
          :text="t('progetto.hero.text')"
          as="h1"
        />
        <figure class="overflow-hidden rounded-[2rem] border border-ink/10 shadow-soft">
          <img
            :src="t('progetto.hero.image')"
            :alt="t('progetto.hero.imageAlt')"
            class="aspect-[4/3] w-full object-cover object-[50%_35%] sm:aspect-[16/9]"
            decoding="async"
          >
        </figure>
      </div>
    </section>

    <section class="section-padding">
      <div class="site-container">
        <p class="eyebrow">{{ t('progetto.why.eyebrow') }}</p>
        <div class="mt-6 grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <figure class="overflow-hidden rounded-[2rem] border border-ink/10 shadow-soft">
            <img
              :src="t('progetto.why.image')"
              :alt="t('progetto.why.imageAlt')"
              class="aspect-[16/9] w-full object-cover"
            >
          </figure>
          <div class="space-y-7 text-lg leading-8 text-ink/72">
            <p v-for="(paragraph, index) in paragraphs" :key="index">
              {{ paragraph.text }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-white/38">
      <div class="site-container">
        <SectionTitle
          :eyebrow="t('progetto.tiktok.eyebrow')"
          :title="t('progetto.tiktok.title')"
          align="center"
        />
        <TikTokEmbed
          :video-id="tiktokId"
          :title="`Video TikTok di Rituali Creativi: ${t('progetto.tiktok.title')}`"
          class="mx-auto mt-10 w-full max-w-[340px]"
        />
        <div class="mt-8 flex justify-center">
          <ButtonSecondary
            :href="`${t('social.tiktok.url').replace(/\/+$/, '')}/video/${tiktokId}`"
            external
            icon="lucide:arrow-up-right"
          >
            {{ t('progetto.tiktok.button') }}
          </ButtonSecondary>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="site-container">
        <SectionTitle
          :eyebrow="t('progetto.vision.eyebrow')"
          :title="t('progetto.vision.title')"
          :text="t('progetto.vision.text')"
          align="center"
        />
        <div class="mt-12 grid gap-5 md:grid-cols-3">
          <InfoCard
            v-for="(card, index) in visionCards"
            :key="index"
            :title="card.title"
            :text="card.text"
            :label="String(index + 1).padStart(2, '0')"
          />
        </div>
      </div>
    </section>

    <CTASection
      :eyebrow="t('progetto.cta.eyebrow')"
      :title="t('progetto.cta.title')"
      :text="t('progetto.cta.text')"
      :primary-label="t('progetto.cta.primary')"
      primary-to="/incontri"
      :secondary-label="t('progetto.cta.secondary')"
      secondary-to="/contatti"
    />
  </div>
</template>

<script setup lang="ts">
import ButtonSecondary from '~/components/Atoms/ButtonSecondary.vue'
import SectionTitle from '~/components/Atoms/SectionTitle.vue'
import InfoCard from '~/components/Molecules/InfoCard.vue'
import TikTokEmbed from '~/components/Molecules/TikTokEmbed.vue'
import CTASection from '~/components/Organisms/CTASection.vue'

const { t, list } = useContent()
const paragraphs = computed(() => list<{ text: string }>('progetto.why.paragraphs'))
const visionCards = computed(() => list<{ title: string; text: string }>('progetto.vision.cards'))
// accetta anche l'indirizzo intero del video incollato al posto del solo codice
const tiktokId = computed(() => t('progetto.tiktok.videoId').match(/\d{8,}/)?.[0] ?? '')

useSeoMeta({
  title: () => t('seo.project.title'),
  description: () => t('seo.project.description'),
  ogTitle: () => t('seo.project.title'),
  ogDescription: () => t('seo.project.description')
})
</script>
