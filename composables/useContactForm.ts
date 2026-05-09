export type ContactReason = 'incontro' | 'custom-order' | 'collaborazione' | 'altro'

export interface ContactFormState {
  name: string
  email: string
  reason: ContactReason | ''
  message: string
}

export interface ContactFormErrors {
  name?: string
  email?: string
  reason?: string
  message?: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function useContactForm(options: {
  endpoint: '/api/contact' | '/api/interest'
  defaultReason?: ContactReason
}) {
  const state = reactive<ContactFormState>({
    name: '',
    email: '',
    reason: options.defaultReason ?? '',
    message: ''
  })

  const errors = reactive<ContactFormErrors>({})
  const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
  const serverMessage = ref('')

  const clearErrors = () => {
    errors.name = undefined
    errors.email = undefined
    errors.reason = undefined
    errors.message = undefined
  }

  const validate = () => {
    clearErrors()

    if (!state.name.trim()) {
      errors.name = 'Inserisci il tuo nome.'
    }

    if (!state.email.trim()) {
      errors.email = 'Inserisci la tua email.'
    } else if (!emailPattern.test(state.email)) {
      errors.email = 'Inserisci un indirizzo email valido.'
    }

    if (!state.reason) {
      errors.reason = 'Scegli un motivo del contatto.'
    }

    if (!state.message.trim() || state.message.trim().length < 10) {
      errors.message = 'Scrivi almeno qualche parola, così posso risponderti meglio.'
    }

    return !errors.name && !errors.email && !errors.reason && !errors.message
  }

  const reset = () => {
    state.name = ''
    state.email = ''
    state.reason = options.defaultReason ?? ''
    state.message = ''
  }

  const submit = async () => {
    serverMessage.value = ''
    status.value = 'idle'

    if (!validate()) {
      return
    }

    status.value = 'loading'

    try {
      await $fetch(options.endpoint, {
        method: 'POST',
        body: {
          name: state.name.trim(),
          email: state.email.trim(),
          reason: state.reason,
          message: state.message.trim()
        }
      })

      status.value = 'success'
      serverMessage.value =
        options.endpoint === '/api/interest'
          ? 'Richiesta ricevuta. Ti risponderò con i dettagli del prossimo ciclo.'
          : 'Messaggio ricevuto. Ti risponderò appena possibile.'
      reset()
    } catch {
      status.value = 'error'
      serverMessage.value =
        'Non sono riuscita a inviare il messaggio. Riprova tra poco oppure scrivimi sui social.'
    }
  }

  return {
    state,
    errors,
    status,
    serverMessage,
    submit
  }
}
