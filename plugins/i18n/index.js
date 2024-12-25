import en from '~/plugins/i18n/locales/en.json';
import ar from '~/plugins/i18n/locales/ar.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: process.browser ? localStorage.getItem('locale') || 'en' : 'en',
  messages: {
    en,
    ar,
  },
}));