import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import * as PhosphorIcons from '@phosphor-icons/vue';
import { h } from 'vue';
import { defaults } from '~/plugins/vuetify/defaults.js';
import { light, dark, LIGHT_THEME, DARK_THEME } from '~/plugins/vuetify/themes.js';

const phosphorIcons = Object.keys(PhosphorIcons).reduce((icons, key) => {
  icons[key] = PhosphorIcons[key];
  return icons;
}, {});

const vuetify = createVuetify({
  ssr: true,
  defaults,
  rtl: true,
  theme: {
    defaultTheme: DARK_THEME,
    themes: {
      light,
      dark,
    },
    variations: {
      colors: ['primary', 'secondary'],
      lighten: 3,
      darken: 3,
    },
  },
  icons: {
    defaultSet: 'phosphor',
    sets: {
      phosphor: {
        component: (props) => {
          const IconComponent = phosphorIcons[props.icon];
          if (!IconComponent) {
            console.warn(`Phosphor Icon "${props.icon}" not found`);
            return null;
          }
          return h(IconComponent, props);
        },
      },
    },
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vuetify);
});