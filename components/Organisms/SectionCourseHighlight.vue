<template>
  <section class="section-padding">
    <div class="site-container">
      <div class="grid gap-8 rounded-[2rem] border border-ink/10 bg-white/58 p-6 shadow-soft sm:p-8 lg:grid-cols-[1.1fr_.9fr] lg:p-10">
        <div>
          <TagBadge>Primo ciclo</TagBadge>
          <h2 class="mt-5 font-serif text-4xl font-medium leading-tight text-ink text-balance sm:text-5xl">
            {{ siteContent.course.title }}
          </h2>
          <p class="mt-5 max-w-2xl text-lg leading-8 text-ink/70">
            {{ siteContent.course.subtitle }}
          </p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonPrimary to="/incontri" icon="lucide:arrow-right">Scopri gli incontri</ButtonPrimary>
            <ButtonSecondary to="/contatti" icon="lucide:message-circle">Chiedi informazioni</ButtonSecondary>
          </div>
        </div>

        <div class="rounded-soft border border-ink/10 bg-cream/80 p-6">
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-2xl bg-white/65 p-5 shadow-line">
              <p class="text-sm text-ink/54">Prezzo standard</p>
              <p class="mt-2 text-3xl font-semibold text-ink line-through decoration-terracotta/60">
                {{ siteContent.course.standardPrice }}
              </p>
            </div>
            <div class="rounded-2xl bg-terracotta p-5 text-white shadow-soft">
              <p class="text-sm text-white/75">Primo ciclo</p>
              <p class="mt-2 text-4xl font-semibold">{{ siteContent.course.launchPrice }}</p>
            </div>
          </div>
          <dl class="mt-5 grid gap-3">
            <div
              v-for="item in highlightDetails"
              :key="item"
              class="flex items-center gap-3 text-sm text-ink/70"
            >
              <Icon name="lucide:check" class="h-4 w-4 text-moss" aria-hidden="true" />
              <span>{{ item }}</span>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ButtonPrimary from '~/components/Atoms/ButtonPrimary.vue'
import ButtonSecondary from '~/components/Atoms/ButtonSecondary.vue'
import TagBadge from '~/components/Atoms/TagBadge.vue'
import { siteContent } from '~/data/siteContent'

const highlightDetails = [
  siteContent.course.duration,
  siteContent.course.groupSize,
  siteContent.course.level,
  siteContent.course.materials
]
</script>
