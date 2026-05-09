<template>
  <section class="section-padding">
    <div class="site-container">
      <div class="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-ink p-8 text-white shadow-soft sm:p-10 lg:p-12">
        <div class="absolute inset-0 bg-textile opacity-20" aria-hidden="true" />
        <div class="absolute right-0 top-0 h-56 w-56 rounded-full bg-sage/30 blur-2xl" aria-hidden="true" />
        <div class="relative max-w-3xl">
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-sand">{{ eyebrow }}</p>
          <h2 class="mt-4 font-serif text-4xl font-medium leading-tight text-balance sm:text-5xl">
            {{ title }}
          </h2>
          <p class="mt-5 text-lg leading-8 text-white/76">{{ text }}</p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonPrimary :to="primaryTo" icon="lucide:send">{{ primaryLabel }}</ButtonPrimary>
            <ButtonSecondary
              v-if="secondaryLabel && secondaryTo"
              :to="secondaryTo"
              icon="lucide:arrow-right"
            >
              {{ secondaryLabel }}
            </ButtonSecondary>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ButtonPrimary from '~/components/Atoms/ButtonPrimary.vue'
import ButtonSecondary from '~/components/Atoms/ButtonSecondary.vue'

defineProps<{
  eyebrow: string
  title: string
  text: string
  primaryLabel: string
  primaryTo: string
  secondaryLabel?: string
  secondaryTo?: string
}>()
</script>
