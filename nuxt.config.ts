import vuetify from 'vite-plugin-vuetify';
import { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  css: ['/assets/css/main.scss'],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-phosphor-icons',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    (_options: any, nuxt: any) => {
      nuxt.hooks.hook('vite:extendConfig', (config: any) => {
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    vueI18n: '~/plugins/i18n/index.js',
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

});