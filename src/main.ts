import { createApp } from 'vue';
import App from './App.vue';
import FloatingVue from 'floating-vue';
import 'sanitize.css';
import 'floating-vue/dist/style.css';
import VueHotjar from 'vue-hotjar-next';

createApp(App)
  .use(VueHotjar, {
    id: 3046255,
    isProduction: true,
    snippetVersion: 6
  })
  .use(FloatingVue)
  .mount('#app');
