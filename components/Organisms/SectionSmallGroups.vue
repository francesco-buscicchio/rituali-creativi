<template>
  <section class="section-padding bg-white/38">
    <div class="site-container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
      <div class="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-ink/10 bg-linen shadow-soft">
        <div class="absolute inset-0 bg-textile opacity-60" />
        <div class="absolute left-10 top-10 h-28 w-28 rounded-full bg-sage/60" />
        <div class="absolute bottom-10 right-10 h-36 w-36 rounded-full bg-powder/55" />
        <div class="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border-[16px] border-white/65" />
        <div class="absolute inset-x-10 bottom-8 rounded-2xl bg-white/55 p-5 backdrop-blur">
          <p class="font-serif text-2xl font-medium text-ink">Poche persone alla volta.</p>
        </div>
      </div>

      <div>
        <SectionTitle
          eyebrow="Atmosfera"
          :title="siteContent.smallGroups.title"
          :text="siteContent.smallGroups.text"
        />
        <div class="mt-8 flex flex-wrap gap-3">
          <TagBadge v-for="point in siteContent.smallGroups.points" :key="point">
            {{ point }}
          </TagBadge>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/Atoms/SectionTitle.vue'
import TagBadge from '~/components/Atoms/TagBadge.vue'
import { siteContent } from '~/data/siteContent'
</script>
