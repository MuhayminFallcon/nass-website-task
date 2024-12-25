<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { onMounted } from 'vue';

const { locale } = useI18n();

const locales = [
  { lang: 'en', name: 'english' },
  { lang: 'ar', name: 'arabic' }
];

const switchLanguage = (lang: string) => {
  locale.value = lang;
  if (typeof window !== 'undefined') {
    localStorage.setItem('locale', lang);
  }
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
};

onMounted(() => {
  if (typeof window !== 'undefined') {
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale) {
      locale.value = savedLocale;
      document.documentElement.setAttribute('dir', savedLocale === 'ar' ? 'rtl' : 'ltr');
    }
  }
});
</script>

<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-icon
          icon="PhTranslate"
          v-bind="props"
      />
    </template>
    <v-list>
      <v-list-item
          v-for="(item, index) in locales"
          :key="index"
          :value="index"
      >
        <v-list-item-title @click="switchLanguage(item.lang)">{{ $t(item.name) }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<style scoped>

</style>