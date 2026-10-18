<template>
  <div>
    <section class="section-padding border-b border-ink/10 bg-linen/34">
      <div class="site-container grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-end">
        <SectionTitle
          :eyebrow="t('creazioni.eyebrow')"
          :title="t('creazioni.title')"
          :text="t('creazioni.intro')"
          as="h1"
        />
        <figure class="overflow-hidden rounded-[2rem] border border-ink/10 bg-white/58 shadow-soft">
          <img
            :src="t('creazioni.image')"
            :alt="t('creazioni.imageAlt')"
            class="aspect-[16/10] h-full w-full object-cover object-[50%_42%]"
          >
        </figure>
      </div>
    </section>

    <section class="section-padding">
      <div class="site-container">
        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <ProductCard
            v-for="(product, index) in products"
            :key="index"
            :title="product.title"
            :category="product.category"
            :text="product.text"
            :palette="siteContent.creations.products[index % siteContent.creations.products.length].palette"
          />
        </div>
      </div>
    </section>

    <CTASection
      :eyebrow="t('creazioni.cta.eyebrow')"
      :title="t('creazioni.cta.title')"
      :text="t('creazioni.cta.text')"
      :primary-label="t('creazioni.cta.primary')"
      primary-to="/contatti"
      :secondary-label="t('creazioni.cta.secondary')"
      secondary-to="/il-progetto"
    />
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/Atoms/SectionTitle.vue'
import ProductCard from '~/components/Molecules/ProductCard.vue'
import CTASection from '~/components/Organisms/CTASection.vue'
import { siteContent } from '~/data/siteContent'

const { t, list } = useContent()
const products = computed(() => list<{ title: string; category: string; text: string }>('creazioni.products'))

useSeoMeta({
  title: () => t('seo.creations.title'),
  description: () => t('seo.creations.description'),
  ogTitle: () => t('seo.creations.title'),
  ogDescription: () => t('seo.creations.description')
})
</script>
