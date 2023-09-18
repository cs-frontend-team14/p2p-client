import type { MessageDto } from "./../api/types";
import {defineStore} from "pinia";
import { ref, computed } from 'vue'

export const useMessagesStore = defineStore('messages', () => {
  const messagesList = ref<MessageDto[]>([]);

  const getMessagesList = computed(() => {
    return messagesList.value
  })
  
  function addMessage(message: {
    text: string;
  }) {
    messagesList.value.push(
      {
        text: message.text,
        createdAt: new Date().toLocaleString(),
        author: 'Anton Ivanov',
        userId: 'create uuid',
        messageId: 'message uuid'
      }
    );
  }
  return {
    getMessagesList,
    addMessage
  }
});