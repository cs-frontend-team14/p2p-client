<script setup lang="ts">
import BaseContainer from '@/shared/ui/BaseContainer/BaseContainer.vue'
import BaseButton from '@/shared/ui/BaseButton/BaseButton.vue'
import BaseInput from '@/shared/ui/BaseInput/BaseInput.vue'
import { IconSend } from '@/shared/ui'

function sendMessage(event: any) {
  console.log(event)
}
</script>

<template>
  <base-container>
    <base-button :icon="IconSend" />
    <base-input :icon="IconSend" :method="sendMessage" />
    <base-button />
  </base-container>
</template>

<style scoped></style>