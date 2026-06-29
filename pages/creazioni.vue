<template>
  <div>
    <section class="section-padding border-b border-ink/10 bg-linen/34">
      <div class="site-container grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-end">
        <SectionTitle
          eyebrow="Creazioni handmade"
          title="Borse e oggetti tessili fatti con calma."
          :text="siteContent.creations.intro"
          as="h1"
        />
        <figure class="overflow-hidden rounded-[2rem] border border-ink/10 bg-white/58 shadow-soft">
          <img
            src="/images/creazioni-borse-handmade.jpg"
            alt="Borse handmade all'uncinetto indossate davanti al mare"
            class="aspect-[16/10] h-full w-full object-cover object-[50%_42%]"
          >
        </figure>
      </div>
    </section>

    <section class="section-padding">
      <div class="site-container">
        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <ProductCard
            v-for="product in siteContent.creations.products"
            :key="product.title"
            :title="product.title"
            :category="product.category"
            :text="product.text"
            :palette="product.palette"
          />
        </div>
      </div>
    </section>

    <CTASection
      eyebrow="Custom order"
      title="Hai in mente un colore, una misura o un oggetto specifico?"
      text="Puoi scrivere per capire insieme se è possibile realizzare un pezzo su richiesta, con tempi e dettagli chiari fin dall’inizio."
      primary-label="Richiedi informazioni"
      primary-to="/contatti"
      secondary-label="Scopri il progetto"
      secondary-to="/il-progetto"
    />
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/Atoms/SectionTitle.vue'
import ProductCard from '~/components/Molecules/ProductCard.vue'
import CTASection from '~/components/Organisms/CTASection.vue'
import { siteContent } from '~/data/siteContent'

useSeoMeta({
  title: siteContent.seo.creations.title,
  description: siteContent.seo.creations.description,
  ogTitle: siteContent.seo.creations.title,
  ogDescription: siteContent.seo.creations.description
})
</script>
