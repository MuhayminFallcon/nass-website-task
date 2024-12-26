<script setup>
import { ref, onMounted } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme();
const isLight = ref(false);

const toggleTheme = () => {
  isLight.value = !isLight.value;
  theme.global.name.value = isLight.value ? 'light' : 'dark';
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', isLight.value ? 'light' : 'dark');
  }
};

onMounted(() => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      theme.global.name.value = savedTheme;
      isLight.value = savedTheme === 'light';
    }
  }
});
</script>

<template>
  <v-icon :icon="isLight ? 'PhSun' : 'PhMoon'" @click="toggleTheme"></v-icon>
</template>

<style scoped>
</style>