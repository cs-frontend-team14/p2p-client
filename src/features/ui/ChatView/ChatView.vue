<script setup lang="ts">

import ChatMessage from "@/shared/ui/ChatMessage/ChatMessage.vue";
import BaseContainer from "@/shared/ui/BaseContainer/BaseContainer.vue";
import { useMessagesStore } from "@/entities/messges/model/messages.store";
import MessageInput from "@/shared/ui/MessageInput/MessageInput.vue";
import { IconSend } from "@/shared/ui";
import BaseButton from "@/shared/ui/BaseButton/BaseButton.vue";

const messagesStore = useMessagesStore();

function addMessage(data: {text: string}) {
  messagesStore.addMessage(data);
}
</script>

<template>
  <base-container>
    <div class="h-[calc(100vh-6.4rem)] flex flex-col justify-items-end items-end">
      <chat-message
        v-for="message in messagesStore.getMessagesList"
        :key="message.messageId"
        :message="message"
      />
    </div>
    <div class="flex items-center w-full">
      <message-input :icon="IconSend" @send="addMessage" />
      <base-button />
    </div>
  </base-container>
</template>

<style scoped>

</style>