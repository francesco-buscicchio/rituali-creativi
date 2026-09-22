<template>
  <div>
    <section class="section-padding border-b border-ink/10 bg-linen/34">
      <div
        class="site-container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center"
      >
        <div class="contents lg:block">
          <h1 class="eyebrow -mb-4 lg:mb-0">Contatti</h1>
          <figure
            class="order-last overflow-hidden lg:order-none lg:mt-6 rounded-[2rem] border border-ink/10 shadow-soft"
          >
            <img
              src="/contatti/DSCF0004_low.JPG"
              alt="Top e borse all’uncinetto fatti a mano, indossati davanti al mare"
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
            <p class="eyebrow">Social</p>
            <div class="mt-5 flex flex-wrap gap-3">
              <SocialLinkItem
                v-for="social in siteContent.socials"
                :key="social.href"
                :href="social.href"
                :label="social.label"
                :handle="social.handle"
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
import { siteContent } from "~/data/siteContent";

const whatsappHref = computed(
  () =>
    `https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`,
);
const whatsappPhoneNumber = "393349931268";
const whatsappMessage =
  "Ciao, vorrei ricevere informazioni su Rituali Creativi. Mi piacerebbe raccontarti cosa cerco e capire quale proposta fa per me.";

useSeoMeta({
  title: siteContent.seo.contact.title,
  description: siteContent.seo.contact.description,
  ogTitle: siteContent.seo.contact.title,
  ogDescription: siteContent.seo.contact.description,
});
</script>
