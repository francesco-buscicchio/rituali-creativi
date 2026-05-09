<template>
  <div class="rounded-[2rem] border border-ink/10 bg-white/55 px-5 shadow-line sm:px-7">
    <FaqItem
      v-for="(item, index) in items"
      :key="item.question"
      :question="item.question"
      :answer="item.answer"
      :open="openIndex === index"
      :panel-id="`faq-panel-${uid}-${index}`"
      @toggle="openIndex = openIndex === index ? -1 : index"
    />
  </div>
</template>

<script setup lang="ts">
import FaqItem from '~/components/Molecules/FaqItem.vue'

const props = withDefaults(defineProps<{
  items: ReadonlyArray<{ question: string; answer: string }>
  initialOpen?: number
}>(), {
  initialOpen: 0
})

const uid = useId()
const openIndex = ref(props.initialOpen ?? 0)
</script>
