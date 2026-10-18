<template>
  <section
    class="rounded-[2rem] border border-ink/10 bg-white/62 p-5 shadow-soft sm:p-7"
  >
    <div class="mb-6">
      <p class="eyebrow">{{ t('whatsapp.eyebrow') }}</p>

      <p class="mt-5 max-w-3xl text-base leading-8 text-ink/72 sm:text-lg">
        {{ t('whatsapp.text') }}
      </p>
    </div>

    <div
      class="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <ButtonPrimary :href="whatsappHref" external icon="lucide:message-circle">
        {{ t('whatsapp.button') }}
      </ButtonPrimary>
      <p v-if="t('whatsapp.display')" class="text-sm font-semibold text-ink/60">
        {{ t('whatsapp.display') }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import ButtonPrimary from "~/components/Atoms/ButtonPrimary.vue";

const { t } = useContent();

const whatsappHref = computed(
  () =>
    `https://wa.me/${t("whatsapp.number").replace(/\D/g, "")}?text=${encodeURIComponent(
      t("whatsapp.message"),
    )}`,
);
</script>
