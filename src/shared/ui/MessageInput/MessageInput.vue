<script setup lang="ts">
import { BaseButton } from '@/shared/ui'
import { ref } from 'vue'
import { type Props } from './types'
import { generateUniqueID } from '@/shared/lib/helpers/generateUniqueId'
const inputId = ref(generateUniqueID('input'))
const message = ref({
  text: ''
})
const inputField = ref<HTMLElement | null>(null)
withDefaults(defineProps<Partial<Props>>(), {
  placeholder: 'Start print text',
})
const emits = defineEmits(['send'])

function sendMessage() {
  emits('send', message.value);
  if (inputField?.value) {
    inputField.value.textContent = ''
  }
}
</script>
<template>
  <div class="message-input w-full flex items-center px-5 py-4">
    <div
      v-bind="$attrs"
      :id="inputId"
      ref="inputField"
      data-placeholder="Aa"
      contenteditable="true"
      class="w-full lg:h-16 lg:pl-
       md:text-base md:min-h-12 px-2 py-1.5 text-sm
       focus:outline-none rounded-lg
       bg-zinc-200 mr-5"
      :class="[message.text.length > 0 ? 'before:content-attr(data-placeholder)' : '' ]"
      @keyup.shift.enter="sendMessage"
      @keyup.exact="message.text = $event.target.innerHTML"
    >
    </div>
    <BaseButton
      v-if="icon"
      :method="sendMessage"
      variant="primary"
      :icon="icon"
      class="top-1/2 rounded w-6 h-6 md:w-9 md:h-9 text-primary-1"
    />
  </div>
</template>