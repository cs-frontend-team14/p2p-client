<script setup lang="ts">
import { ref } from 'vue'
import { generateUniqueID } from '@/shared/lib/helpers/generateUniqueId'
const messageId = ref(generateUniqueID('input'))
defineProps({
  message: {}
});

defineEmits(['update:model-value'])
</script>
<template>
  <div
    :id="messageId"
    class="message w-2/4 p-4 rounded-t-lg rounded-bl-lg bg-primary-1 text-white">
    {{ message.text }}
  </div>
</template>