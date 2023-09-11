<script setup lang="ts">

import ChatMessage from "@/shared/ui/ChatMessage/ChatMessage.vue";
import BaseContainer from "@/shared/ui/BaseContainer/BaseContainer.vue";
</script>

<template>
  <base-container>
    <div class="h-[calc(100vh-6.4rem)] flex flex-col justify-items-end">
      <chat-message
        :message="{ text: 'bla' }"
      />
    </div>
  </base-container>
</template>

<style scoped>

</style>