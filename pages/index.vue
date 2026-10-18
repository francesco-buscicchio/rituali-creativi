<template>
  <div>
    <HeroHome />

    <section class="section-padding border-b border-ink/10 bg-linen/36">
      <div
        class="site-container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start"
      >
        <div>
           <SectionTitle
          :eyebrow="t('home.project.eyebrow')"
          :title="t('home.project.title')"
          text=""
        />
        </div>
        <div class="space-y-6 text-lg leading-8 text-ink/72">
          <p>{{ t('home.project.p1') }}</p>
          <p>{{ t('home.project.p2') }}</p>
        </div>
      </div>

      <div class="site-container flex justify-center pt-16">
        <div
          class="max-w-3xl rounded-[2rem] border border-ink/10 bg-white/55 p-6 text-center shadow-soft sm:p-8"
        >
          <p class="font-serif text-3xl font-medium leading-tight text-ink">
            {{ t('home.quote.title') }}
          </p>
          <p class="mt-5 leading-7 text-ink/68">
            {{ t('home.quote.text') }}
          </p>
        </div>
      </div>
    </section>

    <SectionValues />
    <SectionSmallGroups />
    <!-- <SectionCourseHighlight /> -->

    <CTASection
      :eyebrow="t('home.cta.eyebrow')"
      :title="t('home.cta.title')"
      :text="t('home.cta.text')"
      :primary-label="t('home.cta.primary')"
      primary-to="/contatti"
      :secondary-label="t('home.cta.secondary')"
      secondary-to="/faq"
    />
  </div>
</template>

<script setup lang="ts">
import SectionTitle from "~/components/Atoms/SectionTitle.vue";
import CTASection from "~/components/Organisms/CTASection.vue";
import HeroHome from "~/components/Organisms/HeroHome.vue";
import SectionSmallGroups from "~/components/Organisms/SectionSmallGroups.vue";
import SectionValues from "~/components/Organisms/SectionValues.vue";

const { t } = useContent();

useSeoMeta({
  title: () => t("seo.home.title"),
  description: () => t("seo.home.description"),
  ogTitle: () => t("seo.home.title"),
  ogDescription: () => t("seo.home.description"),
});
</script>
