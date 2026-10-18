<template>
  <div>
    <section class="section-padding border-b border-ink/10 bg-linen/34">
      <div
        class="site-container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center"
      >
        <div class="contents lg:block">
          <h1 class="eyebrow -mb-4 lg:mb-0">{{ t("contatti.eyebrow") }}</h1>
          <figure
            class="order-last overflow-hidden lg:order-none lg:mt-6 rounded-[2rem] border border-ink/10 shadow-soft"
          >
            <img
              :src="t('contatti.image')"
              :alt="t('contatti.imageAlt')"
              class="aspect-[4/5] w-full object-cover object-center"
              decoding="async"
            >
          </figure>
        </div>

        <div class="grid gap-6">
          <WhatsAppContactCard />

          <div
            class="rounded-[2rem] border border-ink/10 bg-white/62 p-5 shadow-soft sm:p-7"
          >
            <p class="eyebrow">{{ t("contatti.socialTitle") }}</p>
            <div class="mt-5 flex flex-wrap gap-3">
              <SocialLinkItem
                v-for="social in siteContent.socials"
                :key="social.href"
                :href="t(`${socialKey(social.label)}.url`)"
                :label="social.label"
                :handle="t(`${socialKey(social.label)}.handle`)"
                :icon="social.icon"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SocialLinkItem from "~/components/Molecules/SocialLinkItem.vue";
import WhatsAppContactCard from "~/components/Organisms/WhatsAppContactCard.vue";
import { socialKey } from "~/data/contentSchema";
import { siteContent } from "~/data/siteContent";

const { t } = useContent();

useSeoMeta({
  title: () => t("seo.contact.title"),
  description: () => t("seo.contact.description"),
  ogTitle: () => t("seo.contact.title"),
  ogDescription: () => t("seo.contact.description"),
});
</script>
