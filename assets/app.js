import './bootstrap.js';
import './styles/app.css';
import { registerVueControllerComponents } from '@symfony/ux-vue';
import { createApp } from 'vue';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './vue/App.vue';

const vuetify = createVuetify({
    components,
    directives,
  })

registerVueControllerComponents(require.context('./vue/controllers', true, /\.vue$/));

createApp(App)
    .use(vuetify)
    .mount('#app');
