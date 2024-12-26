<script setup>
import SplashScreen from "~/components/core/SplashScreen.vue";
const ShowSplashScreen = ref(true)

onMounted(() => {
  const isReloaded = localStorage.getItem('isReloaded')

  if (isReloaded) {
    ShowSplashScreen.value = false
  } else {
    localStorage.setItem('isReloaded', 'true')
  }

  window.addEventListener('load', () => {
    ShowSplashScreen.value = false
  })
})
</script>

<template>
  <SplashScreen v-if="ShowSplashScreen"/>
  <v-app v-else>
    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<style scoped>
</style>