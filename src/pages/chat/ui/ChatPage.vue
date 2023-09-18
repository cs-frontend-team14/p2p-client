<script setup lang="ts">
import ChatHeader from '@/widgets/ChatHeader/ChatHeader.vue';
import ChatFooter from "@/widgets/ChatFooter/ChatFooter.vue";
import ChatView from "@/features/ui/ChatView/ChatView.vue";

</script>
<template>
  <div class="chat-page h-screen flex flex-col">
    <ChatHeader />
    <ChatView />
    <ChatFooter />
  </div>

</template>