<template>
  <form
    class="rounded-[2rem] border border-ink/10 bg-white/62 p-5 shadow-soft sm:p-7"
    novalidate
    @submit.prevent="submit"
  >
    <div class="mb-6">
      <p class="eyebrow">{{ eyebrow }}</p>
      <h2 class="mt-3 font-serif text-3xl font-medium text-ink">{{ title }}</h2>
      <p class="mt-3 leading-7 text-ink/66">{{ intro }}</p>
    </div>

    <div class="grid gap-5">
      <InputText
        v-model="state.name"
        label="Nome"
        name="name"
        autocomplete="name"
        placeholder="Il tuo nome"
        required
        :error="errors.name"
      />
      <InputText
        v-model="state.email"
        label="Email"
        name="email"
        type="email"
        autocomplete="email"
        placeholder="nome@email.it"
        required
        :error="errors.email"
      />
      <SelectField
        v-if="variant === 'contact'"
        v-model="state.reason"
        label="Motivo del contatto"
        name="reason"
        placeholder="Scegli un motivo"
        required
        :options="siteContent.contactReasons"
        :error="errors.reason"
      />
      <TextareaField
        v-model="state.message"
        :label="variant === 'interest' ? 'Cosa ti piacerebbe sapere?' : 'Messaggio'"
        name="message"
        :placeholder="messagePlaceholder"
        required
        :rows="5"
        :error="errors.message"
      />
    </div>

    <div class="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <ButtonPrimary
        type="submit"
        icon="lucide:send"
        :disabled="status === 'loading'"
      >
        {{ status === 'loading' ? 'Invio in corso...' : buttonLabel }}
      </ButtonPrimary>
      <p
        v-if="serverMessage"
        class="text-sm leading-6"
        :class="status === 'success' ? 'text-moss' : 'text-clay'"
        role="status"
      >
        {{ serverMessage }}
      </p>
    </div>
  </form>
</template>

<script setup lang="ts">
import ButtonPrimary from '~/components/Atoms/ButtonPrimary.vue'
import InputText from '~/components/Atoms/InputText.vue'
import SelectField from '~/components/Atoms/SelectField.vue'
import TextareaField from '~/components/Atoms/TextareaField.vue'
import { siteContent } from '~/data/siteContent'

const props = withDefaults(defineProps<{
  variant?: 'contact' | 'interest'
}>(), {
  variant: 'contact'
})

const isInterest = computed(() => props.variant === 'interest')
const eyebrow = computed(() => isInterest.value ? 'Mi interessa' : 'Contatti')
const title = computed(() =>
  isInterest.value ? 'Vuoi partecipare al primo ciclo?' : 'Scrivimi con calma'
)
const intro = computed(() =>
  isInterest.value
    ? 'Lascia i tuoi dati e una breve nota. Ti risponderò con disponibilità, luogo e prossime date.'
    : 'Per incontri, creazioni su richiesta o collaborazioni, puoi usare questo spazio. Rispondo appena possibile.'
)
const messagePlaceholder = computed(() =>
  isInterest.value
    ? 'Raccontami se parti da zero, che giorni preferisci o cosa vorresti chiarire.'
    : 'Scrivi qui il tuo messaggio.'
)
const buttonLabel = computed(() =>
  isInterest.value ? 'Richiedi informazioni' : 'Invia messaggio'
)

const { state, errors, status, serverMessage, submit } = useContactForm({
  endpoint: isInterest.value ? '/api/interest' : '/api/contact',
  defaultReason: isInterest.value ? 'incontro' : undefined
})
</script>
