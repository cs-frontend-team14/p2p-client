<script setup lang="ts">
import BaseButton from "@/shared/ui/BaseButton/BaseButton.vue";
import { Props } from "@/shared/ui/BaseButton/types";

withDefaults(defineProps<Partial<Props>>(), {
})
</script>

<template>
  <base-button
    class="border-0"
    :icon="icon"
  />
</template>

<style scoped>

</style>