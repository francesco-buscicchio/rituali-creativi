<template>
  <div>
    <section class="section-padding border-b border-ink/10 bg-linen/34">
      <div class="site-container grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-start">
        <SectionTitle
          eyebrow="Il progetto"
          title="Creatività lenta"
          text="Rituali Creativi nasce dal bisogno di uno spazio dove fare con le mani diventa anche un modo per ascoltarsi e stare insieme agli altri."
          as="h1"
        />
        <figure class="overflow-hidden rounded-[2rem] border border-ink/10 shadow-soft">
          <img
            src="/hero/DSCF0031.JPG"
            alt="Top e borsa all’uncinetto azzurri, con il lungomare sullo sfondo"
            class="aspect-[4/3] w-full object-cover object-[50%_35%] sm:aspect-[16/9]"
            decoding="async"
          >
        </figure>
      </div>
    </section>

    <section class="section-padding">
      <div class="site-container">
        <p class="eyebrow">Perché nasce</p>
        <div class="mt-6 grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <figure class="overflow-hidden rounded-[2rem] border border-ink/10 shadow-soft">
            <img
              src="/images/progetto-perche-nasce-borsa.jpg"
              alt="Borsa handmade lilla vicino all'acqua"
              class="aspect-[16/9] w-full object-cover"
            >
          </figure>
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
      </div>
    </section>

    <section class="section-padding bg-white/38">
      <div class="site-container">
        <SectionTitle
          eyebrow="Dal profilo TikTok"
          title="Possiamo crearlo insieme."
          align="center"
        />
        <TikTokEmbed
          video-id="7632712972745313558"
          title="Video TikTok di Rituali Creativi: Possiamo crearlo insieme"
          class="mx-auto mt-10 w-full max-w-[340px]"
        />
        <div class="mt-8 flex justify-center">
          <ButtonSecondary
            href="https://www.tiktok.com/@ritualicreativi/video/7632712972745313558"
            external
            icon="lucide:arrow-up-right"
          >
            Guarda su TikTok
          </ButtonSecondary>
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
            text="Imparare punti e tecniche, con una guida presente e tempi accessibili."
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
import ButtonSecondary from '~/components/Atoms/ButtonSecondary.vue'
import SectionTitle from '~/components/Atoms/SectionTitle.vue'
import InfoCard from '~/components/Molecules/InfoCard.vue'
import TikTokEmbed from '~/components/Molecules/TikTokEmbed.vue'
import CTASection from '~/components/Organisms/CTASection.vue'
import { siteContent } from '~/data/siteContent'

useSeoMeta({
  title: siteContent.seo.project.title,
  description: siteContent.seo.project.description,
  ogTitle: siteContent.seo.project.title,
  ogDescription: siteContent.seo.project.description
})
</script>
