<template>
  <section class="section-padding bg-linen/38">
    <div class="site-container">
      <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionTitle
          eyebrow="Creazioni"
          title="Pezzi fatti a mano, senza fretta"
          :text="siteContent.creations.intro"
        />
        <ButtonSecondary to="/creazioni" icon="lucide:arrow-right">Vedi le creazioni</ButtonSecondary>
      </div>

      <div class="mt-10 grid gap-5 md:grid-cols-3">
        <ProductCard
          v-for="product in previewProducts"
          :key="product.title"
          :title="product.title"
          :category="product.category"
          :text="product.text"
          :palette="product.palette"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ButtonSecondary from '~/components/Atoms/ButtonSecondary.vue'
import SectionTitle from '~/components/Atoms/SectionTitle.vue'
import ProductCard from '~/components/Molecules/ProductCard.vue'
import { siteContent } from '~/data/siteContent'

const previewProducts = siteContent.creations.products.slice(0, 3)
</script>
