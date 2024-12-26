import vuetify from 'vite-plugin-vuetify';
import { transformAssetUrls } from 'vite-plugin-vuetify';

function extendViteConfig(_options: any, nuxt: any) {
  nuxt.hooks.hook('vite:extendConfig', (config: any) => {
    config.plugins.push(vuetify({ autoImport: true }));
  });
}

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  css: [
      '/assets/css/main.scss',
      'vuetify/dist/vuetify.css',
      'vuetify/dist/vuetify.min.css',
      'vuetify/lib/styles/main.sass'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-phosphor-icons',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxt/image',
    extendViteConfig,
  ],
  image: {
    inject: true,
  },
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

  //website page header title and icon or image
  app: {
    head: {
      title: 'project name', // website title
  },
});