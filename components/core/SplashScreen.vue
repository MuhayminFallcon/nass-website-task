<script setup>
import { ref } from 'vue'

const isVisible = ref(true)

</script>

<template>
  <div v-if="isVisible" class="fixed inset-0 flex justify-center items-center bg-background z-50">
    <div class="grid gap-4 place-items-center">
      <img src="/favicon.ico" width="80px" height="auto" alt="logo" class="animate-pulse">

    </div>
  </div>
</template>