<template>
  <section
    class="rounded-[2rem] border border-ink/10 bg-white/62 p-5 shadow-soft sm:p-7"
  >
    <div class="mb-6">
      <p class="eyebrow">WhatsApp</p>
      <h2 class="mt-3 font-serif text-3xl font-medium text-ink">
        Scrivimi direttamente
      </h2>
    </div>

    <div class="rounded-[1.5rem] border border-ink/10 bg-linen/32 p-5">
      <p class="eyebrow">Messaggio consigliato</p>
      <p class="mt-3 leading-7 text-ink/72">
        {{ whatsappMessage }}
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
