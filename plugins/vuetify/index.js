// plugins/vuetify/index.js
import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css'; // Required for Vuetify default styles
import * as PhosphorIcons from '@phosphor-icons/vue';
import { h } from 'vue';

const phosphorIcons = Object.keys(PhosphorIcons).reduce((icons, key) => {
    icons[key] = PhosphorIcons[key];
    return icons;
}, {});

const vuetify = createVuetify({
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
