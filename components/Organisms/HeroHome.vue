<template>
  <section class="relative overflow-hidden border-b border-ink/10">
    <div class="absolute inset-0 woven-surface opacity-70" aria-hidden="true" />
    <div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cream to-transparent" aria-hidden="true" />
    <div class="site-container relative grid min-h-[68vh] items-center gap-10 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-20">
      <div class="max-w-3xl">
        <p class="eyebrow">{{ siteContent.home.hero.eyebrow }}</p>
        <h1 class="mt-5 font-serif text-5xl font-medium leading-[0.98] text-ink text-balance sm:text-6xl lg:text-7xl">
          {{ siteContent.home.hero.title }}
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-ink/72 sm:text-xl">
          {{ siteContent.home.hero.subtitle }}
        </p>
        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonPrimary to="/incontri" icon="lucide:arrow-right">
            {{ siteContent.home.hero.primaryCta }}
          </ButtonPrimary>
          <ButtonSecondary to="/contatti" icon="lucide:message-circle">
            {{ siteContent.home.hero.secondaryCta }}
          </ButtonSecondary>
        </div>
      </div>

      <div class="relative min-h-[380px] sm:min-h-[540px] lg:min-h-[560px]" aria-label="Dettaglio di borsa e top fatti a mano">
        <div class="absolute left-4 top-8 h-56 w-44 rounded-[2rem] border border-white/70 bg-white/35 shadow-soft backdrop-blur-sm sm:left-12 sm:h-72 sm:w-56" />
        <div class="absolute right-4 top-0 h-64 w-44 rounded-full bg-powder/35 blur-sm sm:right-16 sm:h-80 sm:w-56" />
        <div class="absolute bottom-8 right-8 h-56 w-56 rounded-full bg-sage/35 shadow-soft" />
        <div class="absolute bottom-0 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full border-[18px] border-terracotta/45 bg-cream/45 shadow-soft" />
        <div class="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/10 bg-white/30 bg-textile shadow-soft backdrop-blur-sm" />
        <div class="absolute inset-x-0 bottom-4 z-10 mx-auto w-[min(86%,22rem)] overflow-hidden rounded-[2rem] border border-white/70 bg-white/30 shadow-soft sm:w-[min(78%,26rem)] lg:bottom-8 lg:w-[min(84%,28rem)]">
          <img
            src="/images/home-hero-borsa-celeste.jpg"
            alt="Borsa e top celesti fatti a mano"
            class="aspect-[4/5] w-full object-cover object-[48%_50%] sm:aspect-[5/6]"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ButtonPrimary from '~/components/Atoms/ButtonPrimary.vue'
import ButtonSecondary from '~/components/Atoms/ButtonSecondary.vue'
import { siteContent } from '~/data/siteContent'
</script>
