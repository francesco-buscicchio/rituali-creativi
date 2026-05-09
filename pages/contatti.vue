<template>
  <div>
    <section class="section-padding border-b border-ink/10 bg-linen/34">
      <div
        class="site-container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start"
      >
        <div>
          <SectionTitle
            eyebrow="Contatti"
            title="Scrivimi per incontri, creazioni o collaborazioni."
            as="h1"
          />
          <div class="mt-8 grid gap-3 max-w-96">
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

        <WhatsAppContactCard />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from "~/components/Atoms/SectionTitle.vue";
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
