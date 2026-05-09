<template>
  <div class="min-h-screen bg-cream text-ink">
    <HeaderMain />
    <main id="main-content">
      <slot />
    </main>
    <FooterMain />
  </div>
</template>

<script setup lang="ts">
import FooterMain from '~/components/Organisms/FooterMain.vue'
import HeaderMain from '~/components/Organisms/HeaderMain.vue'
</script>
