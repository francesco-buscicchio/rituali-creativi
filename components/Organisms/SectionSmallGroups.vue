<template>
  <section class="section-padding bg-white/38">
    <div class="site-container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
      <div class="relative mx-auto w-full max-w-[480px] py-8 lg:mx-0 lg:max-w-none">
        <div class="absolute left-0 top-6 h-28 w-28 rounded-full bg-sage/55 sm:h-36 sm:w-36" />
        <div class="absolute bottom-10 right-0 h-36 w-36 rounded-full bg-powder/50 sm:h-44 sm:w-44" />
        <div class="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border-[16px] border-linen/75 sm:h-60 sm:w-60" />
        <img
          src="/images/small-groups-borsa-handmade.jpg"
          alt="Borsa realizzata a mano tenuta in alto su sfondo azzurro"
          class="relative z-10 mx-auto aspect-[4/5] w-[84%] rounded-[1.75rem] object-cover object-[54%_42%] shadow-soft"
        />
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
