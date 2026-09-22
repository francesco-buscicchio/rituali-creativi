<template>
  <div>
    <HeroHome />

    <section class="section-padding border-b border-ink/10 bg-linen/36">
      <div
        class="site-container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start"
      >
        <div>
           <SectionTitle
          :eyebrow="siteContent.home.project.eyebrow"
          :title="siteContent.home.project.title"
          text=""
        />
        </div>
        <div class="space-y-6 text-lg leading-8 text-ink/72">
          <p>{{ siteContent.home.intro }}</p>
          <p>
            Qui l’uncinetto diventa un pretesto buono: per imparare qualcosa di
            nuovo, incontrare persone con lo stesso bisogno di lentezza e
            concedersi un tempo non performativo.
          </p>
        </div>
      </div>

      <div class="site-container flex justify-center pt-16">
        <div
          class="max-w-3xl rounded-[2rem] border border-ink/10 bg-white/55 p-6 text-center shadow-soft sm:p-8"
        >
          <p class="font-serif text-3xl font-medium leading-tight text-ink">
            “Non serve fare bene, serve sentirsi a proprio agio.”
          </p>
          <p class="mt-5 leading-7 text-ink/68">
            Ogni gesto viene spiegato con pazienza. Ogni pausa è permessa. Ogni
            persona può trovare il proprio modo di stare nel processo.
          </p>
        </div>
      </div>
    </section>

    <SectionValues />
    <SectionSmallGroups />
    <!-- <SectionCourseHighlight /> -->

    <CTASection
      eyebrow="Inizia da qui"
      title="Vuoi capire se questo spazio fa per te?"
      text="Puoi scrivermi senza impegno: ti racconto il prossimo ciclo di incontri, le creazioni disponibili o le possibilità su misura."
      primary-label="Scrivimi"
      primary-to="/contatti"
      secondary-label="Leggi le FAQ"
      secondary-to="/faq"
    />
  </div>
</template>

<script setup lang="ts">
import TagBadge from "~/components/Atoms/TagBadge.vue";
import SectionTitle from "~/components/Atoms/SectionTitle.vue";
import CTASection from "~/components/Organisms/CTASection.vue";
import HeroHome from "~/components/Organisms/HeroHome.vue";
import SectionCourseHighlight from "~/components/Organisms/SectionCourseHighlight.vue";
import SectionSmallGroups from "~/components/Organisms/SectionSmallGroups.vue";
import SectionValues from "~/components/Organisms/SectionValues.vue";
import { siteContent } from "~/data/siteContent";

useSeoMeta({
  title: siteContent.seo.home.title,
  description: siteContent.seo.home.description,
  ogTitle: siteContent.seo.home.title,
  ogDescription: siteContent.seo.home.description,
});
</script>
