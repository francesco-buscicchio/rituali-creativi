<template>
  <div>
    <section class="section-padding border-b border-ink/10 bg-linen/34">
      <div class="site-container grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center">
        <div>
          <TagBadge>Incontri di uncinetto</TagBadge>
          <h1 class="mt-5 font-serif text-5xl font-medium leading-tight text-ink text-balance sm:text-6xl">
            Si parte da zero e si va con calma.
          </h1>
          <p class="mt-6 max-w-2xl text-lg leading-8 text-ink/72">
            {{ siteContent.course.subtitle }}
          </p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonPrimary to="#mi-interessa" icon="lucide:send">Mi interessa</ButtonPrimary>
            <ButtonSecondary to="/faq" icon="lucide:circle-help">Leggi le FAQ</ButtonSecondary>
          </div>
        </div>

        <div class="rounded-[2rem] border border-ink/10 bg-white/62 p-6 shadow-soft">
          <p class="eyebrow">Dettagli primo ciclo</p>
          <dl class="mt-5 grid gap-4">
            <div
              v-for="item in siteContent.course.practicalDetails"
              :key="item.label"
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
          eyebrow="Come funziona"
          title="Un’esperienza guidata, lenta e accessibile"
          text="Ogni ciclo accompagna le basi dell’uncinetto dentro un contesto raccolto. Non devi arrivare preparata: materiali, ritmo e passaggi sono pensati per iniziare con serenità."
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
          eyebrow="Cosa porti a casa"
          title="Non solo una tecnica, ma un modo diverso di prenderti tempo"
          text="Alla fine del ciclo avrai imparato i gesti base, iniziato un progetto concreto e sperimentato un tempo creativo più leggero."
        />
        <div class="grid gap-4 sm:grid-cols-2">
          <InfoCard title="Le basi" text="Catenella, maglia bassa, avvio del lavoro e lettura dei passaggi principali." />
          <InfoCard title="Un progetto" text="Un piccolo oggetto tessile da completare o continuare con una traccia chiara." />
          <InfoCard title="Materiali" text="Strumenti e filati inclusi, scelti per essere piacevoli anche per chi inizia." />
          <InfoCard title="Una pausa vera" text="Un appuntamento in cui uscire dalla routine e tornare a un ritmo più umano." />
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="site-container grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
        <div>
          <SectionTitle
            eyebrow="FAQ"
            title="Domande frequenti sugli incontri"
            text="Le risposte essenziali prima di scrivere o lasciare il tuo interesse."
          />
          <ButtonSecondary class="mt-8" to="/faq" icon="lucide:arrow-right">Vai a tutte le FAQ</ButtonSecondary>
        </div>
        <FaqAccordion :items="siteContent.faq.slice(0, 4)" />
      </div>
    </section>

    <section id="mi-interessa" class="section-padding bg-linen/38">
      <div class="site-container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
        <SectionTitle
          eyebrow="Richiedi info"
          title="Lascia il tuo interesse per il primo ciclo"
          text="Non è una prenotazione vincolante: serve solo a capire disponibilità, preferenze e prossime date."
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
import { siteContent } from '~/data/siteContent'

useSeoMeta({
  title: siteContent.seo.meetings.title,
  description: siteContent.seo.meetings.description,
  ogTitle: siteContent.seo.meetings.title,
  ogDescription: siteContent.seo.meetings.description
})
</script>
