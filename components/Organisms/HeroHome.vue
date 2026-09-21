<template>
  <section class="relative border-b border-ink/10 lg:flex lg:h-[calc(100vh_-_5rem)] lg:min-h-[640px] lg:max-h-[960px] lg:items-end lg:overflow-hidden">
    <div class="relative overflow-hidden bg-linen lg:absolute lg:inset-0">
      <img
        src="/hero/DSCF0002.JPG"
        alt="Tre borse all’uncinetto, bianca, nera e lilla, tenute in mano davanti al mare"
        class="aspect-[4/3] w-full object-cover object-center sm:aspect-[16/9] lg:aspect-auto lg:h-full lg:object-[50%_75%]"
        fetchpriority="high"
        decoding="async"
      >
      <div class="absolute inset-0 hidden bg-ink/15 lg:block" aria-hidden="true" />
      <div class="absolute inset-x-0 bottom-0 hidden h-[70%] bg-gradient-to-t from-ink/90 via-ink/50 to-transparent lg:block" aria-hidden="true" />
    </div>

    <div class="site-container relative py-12 sm:py-16 lg:pb-14 lg:pt-10">
      <div class="max-w-3xl lg:max-w-2xl">
        <h1 class="font-serif text-5xl font-medium leading-[0.98] text-ink text-balance sm:text-6xl lg:text-cream">
          {{ siteContent.home.hero.title }}
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-ink/72 sm:text-xl lg:text-cream/85">
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
    </div>
  </section>
</template>

<script setup lang="ts">
import ButtonPrimary from '~/components/Atoms/ButtonPrimary.vue'
import ButtonSecondary from '~/components/Atoms/ButtonSecondary.vue'
import { siteContent } from '~/data/siteContent'
</script>
