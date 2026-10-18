<template>
  <footer class="border-t border-ink/10 bg-linen/55">
    <div class="site-container grid gap-10 py-12 lg:grid-cols-[1.2fr_1fr_1fr]">
      <div>
        <NuxtLink to="/" class="font-serif text-3xl font-medium text-ink">
          {{ t('brand.name') }}
        </NuxtLink>
        <p class="mt-4 max-w-md leading-7 text-ink/68">{{ t('brand.payoff') }}</p>
        <p class="mt-6 text-sm text-ink/52">{{ t('brand.footerNote') }}</p>
      </div>

      <nav aria-label="Navigazione secondaria">
        <p class="text-sm font-semibold uppercase tracking-[0.16em] text-clay">{{ t('footer.pagesTitle') }}</p>
        <div class="mt-4 grid gap-3">
          <NuxtLink
            v-for="item in siteContent.navigation"
            :key="item.to"
            :to="item.to"
            class="text-sm text-ink/68 transition hover:text-ink"
          >
            {{ t(navKey(item.to)) }}
          </NuxtLink>
        </div>
      </nav>

      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.16em] text-clay">{{ t('footer.socialTitle') }}</p>
        <div class="mt-4 grid gap-3">
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
    <div class="site-container border-t border-ink/10 py-5 text-sm text-ink/52">
      © {{ new Date().getFullYear() }} {{ t('brand.name') }}. {{ t('footer.copyright') }}
    </div>
  </footer>
</template>

<script setup lang="ts">
import SocialLinkItem from '~/components/Molecules/SocialLinkItem.vue'
import { navKey, socialKey } from '~/data/contentSchema'
import { siteContent } from '~/data/siteContent'

const { t } = useContent()
</script>
