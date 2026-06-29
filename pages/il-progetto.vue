<template>
  <div>
    <section class="section-padding border-b border-ink/10 bg-linen/34">
      <div class="site-container grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-end">
        <SectionTitle
          eyebrow="Il progetto"
          title="Creativita lenta, senza produttivita forzata."
          text="Rituali Creativi nasce dal bisogno di uno spazio più semplice, dove fare con le mani diventa anche un modo per ascoltarsi."
          as="h1"
        />
        <div class="rounded-[2rem] border border-ink/10 bg-white/58 p-6 leading-8 text-ink/70 shadow-soft sm:p-8">
          <p>
            Non è un manifesto rigido e non vuole insegnare un modo giusto di essere creativi.
            È un invito a togliere un po’ di pressione dal fare.
          </p>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="site-container grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div class="space-y-6">
          <p class="eyebrow">Perche nasce</p>
          <figure class="overflow-hidden rounded-[2rem] border border-ink/10 shadow-soft">
            <img
              src="/images/progetto-perche-nasce-borsa.jpg"
              alt="Borsa handmade lilla vicino all'acqua"
              class="aspect-[16/9] w-full object-cover"
            >
          </figure>
        </div>
        <div class="space-y-7 text-lg leading-8 text-ink/72">
          <p>
            Abbiamo perso un po’ l’abitudine a creare solo per il gusto di farlo.
            Molto spesso anche il tempo libero diventa qualcosa da ottimizzare, mostrare,
            misurare.
          </p>
          <p>
            Rituali Creativi nasce dal bisogno opposto: uno spazio più umano, in cui
            lasciarsi andare alla creatività e stare insieme senza pressione.
          </p>
          <p>
            L’uncinetto e le pratiche tessili sono il punto di partenza per ritrovare
            presenza. Il filo obbliga a rallentare, il punto chiede attenzione, il gruppo
            ricorda che non siamo fatte per fare tutto da sole.
          </p>
        </div>
      </div>
    </section>

    <section class="section-padding bg-white/38">
      <div class="site-container">
        <div class="rounded-[2rem] border border-ink/10 bg-cream p-7 shadow-soft sm:p-10 lg:p-12">
          <p class="eyebrow">Manifesto semplice</p>
          <div class="mt-6 grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-center">
            <h2 class="font-serif text-4xl font-medium leading-tight text-ink text-balance sm:text-5xl">
              Abbiamo perso un po’ l’abitudine a creare solo per il gusto di farlo.
            </h2>
            <p class="text-lg leading-8 text-ink/70">
              Rituali Creativi nasce dal bisogno di uno spazio più semplice, in cui
              lasciarsi andare alla creatività e stare insieme, senza pressione. Si può
              parlare, ascoltare, sbagliare, disfare e ricominciare. Si può anche stare in
              silenzio, mentre le mani trovano il loro ritmo.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="site-container">
        <SectionTitle
          eyebrow="Visione"
          title="Un posto dove il fare non deve sempre diventare prestazione"
          text="Il valore non sta solo nell’oggetto finito, ma nel tempo che ci si concede mentre lo si crea."
          align="center"
        />
        <div class="mt-12 grid gap-5 md:grid-cols-3">
          <InfoCard
            title="Fare"
            text="Imparare punti e tecniche semplici, con una guida presente e tempi accessibili."
            label="01"
          />
          <InfoCard
            title="Parlare"
            text="Condividere pensieri, domande e piccole scoperte senza dover riempire ogni momento."
            label="02"
          />
          <InfoCard
            title="Stare"
            text="Accogliere anche il silenzio, la lentezza e la possibilità di non performare."
            label="03"
          />
        </div>
      </div>
    </section>

    <CTASection
      eyebrow="Prossimo passo"
      title="Se senti che questo spazio ti somiglia, vieni a scoprirlo."
      text="Gli incontri sono pensati per partire da zero e vivere la creatività come un momento di riconnessione."
      primary-label="Scopri gli incontri"
      primary-to="/incontri"
      secondary-label="Scrivimi"
      secondary-to="/contatti"
    />
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/Atoms/SectionTitle.vue'
import InfoCard from '~/components/Molecules/InfoCard.vue'
import CTASection from '~/components/Organisms/CTASection.vue'
import { siteContent } from '~/data/siteContent'

useSeoMeta({
  title: siteContent.seo.project.title,
  description: siteContent.seo.project.description,
  ogTitle: siteContent.seo.project.title,
  ogDescription: siteContent.seo.project.description
})
</script>
