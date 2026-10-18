<template>
  <div>
    <section class="section-padding border-b border-ink/10 bg-linen/34">
      <div class="site-container grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center">
        <div>
          <TagBadge>{{ t('incontri.hero.badge') }}</TagBadge>
          <h1 class="mt-5 font-serif text-5xl font-medium leading-tight text-ink text-balance sm:text-6xl">
            {{ t('incontri.hero.title') }}
          </h1>
          <p class="mt-6 max-w-2xl text-lg leading-8 text-ink/72">
            {{ t('incontri.hero.text') }}
          </p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonPrimary to="#mi-interessa" icon="lucide:send">{{ t('incontri.hero.primary') }}</ButtonPrimary>
            <ButtonSecondary to="/faq" icon="lucide:circle-help">{{ t('incontri.hero.secondary') }}</ButtonSecondary>
          </div>
        </div>

        <div class="rounded-[2rem] border border-ink/10 bg-white/62 p-6 shadow-soft">
          <p class="eyebrow">{{ t('incontri.details.title') }}</p>
          <dl class="mt-5 grid gap-4">
            <div
              v-for="(item, index) in practicalDetails"
              :key="index"
              class="flex items-center justify-between gap-4 border-b border-ink/10 pb-3 last:border-b-0 last:pb-0"
            >
              <dt class="text-sm text-ink/58">{{ item.label }}</dt>
              <dd class="text-right font-semibold text-ink">{{ item.value }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="site-container">
        <SectionTitle
          :eyebrow="t('incontri.how.eyebrow')"
          :title="t('incontri.how.title')"
          :text="t('incontri.how.text')"
          align="center"
        />
        <div class="mt-12">
          <CourseDetailsGrid />
        </div>
      </div>
    </section>

    <section class="section-padding bg-white/38">
      <div class="site-container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
        <SectionTitle
          :eyebrow="t('incontri.takeaway.eyebrow')"
          :title="t('incontri.takeaway.title')"
          :text="t('incontri.takeaway.text')"
        />
        <div class="grid gap-4 sm:grid-cols-2">
          <InfoCard
            v-for="(card, index) in takeawayCards"
            :key="index"
            :title="card.title"
            :text="card.text"
          />
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="site-container grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
        <div>
          <SectionTitle
            :eyebrow="t('incontri.faq.eyebrow')"
            :title="t('incontri.faq.title')"
            :text="t('incontri.faq.text')"
          />
          <ButtonSecondary class="mt-8" to="/faq" icon="lucide:arrow-right">{{ t('incontri.faq.button') }}</ButtonSecondary>
        </div>
        <FaqAccordion :items="faqPreview" />
      </div>
    </section>

    <section id="mi-interessa" class="section-padding bg-linen/38">
      <div class="site-container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
        <SectionTitle
          :eyebrow="t('incontri.form.sectionEyebrow')"
          :title="t('incontri.form.sectionTitle')"
          :text="t('incontri.form.sectionText')"
        />
        <ContactForm variant="interest" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ButtonPrimary from '~/components/Atoms/ButtonPrimary.vue'
import ButtonSecondary from '~/components/Atoms/ButtonSecondary.vue'
import SectionTitle from '~/components/Atoms/SectionTitle.vue'
import TagBadge from '~/components/Atoms/TagBadge.vue'
import InfoCard from '~/components/Molecules/InfoCard.vue'
import ContactForm from '~/components/Organisms/ContactForm.vue'
import CourseDetailsGrid from '~/components/Organisms/CourseDetailsGrid.vue'
import FaqAccordion from '~/components/Organisms/FaqAccordion.vue'

const { t, list } = useContent()
const practicalDetails = computed(() => list<{ label: string; value: string }>('incontri.details.items'))
const takeawayCards = computed(() => list<{ title: string; text: string }>('incontri.takeaway.cards'))
const faqPreview = computed(() => {
  const count = Number.parseInt(t('incontri.faq.count'), 10)
  return list<{ question: string; answer: string }>('faq.items').slice(0, Number.isNaN(count) ? 4 : Math.max(count, 0))
})

useSeoMeta({
  title: () => t('seo.meetings.title'),
  description: () => t('seo.meetings.description'),
  ogTitle: () => t('seo.meetings.title'),
  ogDescription: () => t('seo.meetings.description')
})
</script>
