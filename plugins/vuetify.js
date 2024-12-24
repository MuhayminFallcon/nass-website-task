// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        icons: {
            iconfont: 'mdi',
        },

    })
    app.vueApp.use(vuetify)
})
