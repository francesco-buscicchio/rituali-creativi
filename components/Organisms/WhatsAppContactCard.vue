<template>
  <section
    class="rounded-[2rem] border border-ink/10 bg-white/62 p-5 shadow-soft sm:p-7"
  >
    <div class="mb-6">
      <p class="eyebrow">WhatsApp</p>

      <p class="mt-5 max-w-3xl text-base leading-8 text-ink/72 sm:text-lg">
        Contattami direttamente su WhatsApp: puoi chiedere informazioni,
        raccontarmi cosa cerchi o capire insieme quale proposta fa per te.
      </p>
    </div>

    <div
      class="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <ButtonPrimary :href="whatsappHref" external icon="lucide:message-circle">
        Apri WhatsApp
      </ButtonPrimary>
      <p class="text-sm font-semibold text-ink/58">
        {{ whatsappDisplayNumber }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import ButtonPrimary from "~/components/Atoms/ButtonPrimary.vue";

const whatsappPhoneNumber = "393349931268";
const whatsappDisplayNumber = "";
const whatsappMessage =
  "Ciao, vorrei ricevere informazioni su Rituali Creativi. Mi piacerebbe raccontarti cosa cerco e capire quale proposta fa per me.";

const whatsappHref = computed(
  () =>
    `https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`,
);
</script>
