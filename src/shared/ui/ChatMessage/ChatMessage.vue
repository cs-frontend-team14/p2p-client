<script setup lang="ts">
import { ref } from 'vue'
import { generateUniqueID } from '@/shared/lib/helpers/generateUniqueId'
import { Props } from "@/shared/ui/chatMessage/types";
const messageId = ref(generateUniqueID('input'))
withDefaults(defineProps<Partial<Props>>(), {
  message: {
    text: 'Default message'
  }
})

defineEmits(['update:model-value'])
</script>
<template>
  <div
    :id="messageId"
    class="message w-2/4 p-4 rounded-t-lg rounded-bl-lg bg-primary-1">
    {{ message.text }}
  </div>
</template>