<script setup lang="ts">
import BaseContainer from '@/shared/ui/BaseContainer/BaseContainer.vue'
import BaseButton from '@/shared/ui/BaseButton/BaseButton.vue'
import { IconSend } from '@/shared/ui'
import MessageInput from "@/shared/ui/MessageInput/MessageInput.vue";

function sendMessage(event: any) {
  console.log(event)
}
</script>

<template>
  <base-container class="mt-auto">
    <div class="flex items-center w-full">
<!--      <base-button :icon="IconSend" />-->
      <message-input :icon="IconSend" :method="sendMessage" />
      <base-button />
    </div>

  </base-container>
</template>

<style scoped></style>