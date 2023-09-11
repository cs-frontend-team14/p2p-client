<script setup lang="ts">
import ChatHeader from '@/widgets/ChatHeader/ChatHeader.vue';
import ChatFooter from "@/widgets/ChatFooter/ChatFooter.vue";
import ChatBody from "@/widgets/ChatBody/ChatBody.vue";

</script>
<template>
  <div class="chat-page h-screen flex flex-col">
    <ChatHeader />
    <ChatBody />
    <ChatFooter />
  </div>

</template>