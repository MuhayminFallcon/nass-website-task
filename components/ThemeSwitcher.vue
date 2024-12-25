<script setup lang="ts">
import { ref } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme();
const isLight = ref(theme.global.current.value === 'light');

const toggleTheme = () => {
  isLight.value = !isLight.value;
  theme.global.name.value = isLight.value ? 'light' : 'dark';
};
</script>

<template>
  <v-icon :icon="isLight ? 'PhSun' : 'PhMoon' " @click="toggleTheme" >
  </v-icon>
</template>

<style scoped>
</style>