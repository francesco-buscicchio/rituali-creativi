<template>
  <header class="sticky top-0 z-50 border-b border-ink/10 bg-cream/88 backdrop-blur-xl">
    <div class="site-container flex min-h-20 items-center justify-between gap-4">
      <NuxtLink to="/" class="group inline-flex items-center gap-3" aria-label="Vai alla home">
        <img
          src="/logo-rituali-creativi.png"
          alt=""
          class="h-10 w-10 shrink-0 rounded-full object-contain transition group-hover:scale-105"
          aria-hidden="true"
        >
        <span class="font-serif text-2xl font-medium text-ink">{{ siteContent.brand.name }}</span>
      </NuxtLink>

      <nav class="hidden items-center gap-1 lg:flex" aria-label="Navigazione principale">
        <NavLink
          v-for="item in siteContent.navigation"
          :key="item.to"
          :label="item.label"
          :to="item.to"
        />
      </nav>

      <div class="hidden lg:block">
        <ButtonPrimary to="/contatti" icon="lucide:send">Richiedi info</ButtonPrimary>
      </div>

      <button
        type="button"
        class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white/70 text-ink shadow-line lg:hidden"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        aria-label="Apri o chiudi il menu"
        @click="menuOpen = !menuOpen"
      >
        <Icon :name="menuOpen ? 'lucide:x' : 'lucide:menu'" class="h-5 w-5" aria-hidden="true" />
      </button>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <nav
        v-if="menuOpen"
        id="mobile-menu"
        class="site-container pb-5 lg:hidden"
        aria-label="Navigazione mobile"
      >
        <div class="grid gap-2 rounded-soft border border-ink/10 bg-white/70 p-3 shadow-soft">
          <NavLink
            v-for="item in siteContent.navigation"
            :key="item.to"
            :label="item.label"
            :to="item.to"
            @navigate="menuOpen = false"
          />
          <ButtonPrimary to="/contatti" icon="lucide:send" @click="menuOpen = false">
            Richiedi info
          </ButtonPrimary>
        </div>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import ButtonPrimary from '~/components/Atoms/ButtonPrimary.vue'
import NavLink from '~/components/Molecules/NavLink.vue'
import { siteContent } from '~/data/siteContent'

const menuOpen = ref(false)
const route = useRoute()

watch(() => route.fullPath, () => {
  menuOpen.value = false
})
</script>
