// main.js

import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import en from '@/locales/en.json';
import uk from '@/locales/uk.json';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);

// Set up Vue I18n
const i18n = createI18n({
    locale: 'uk', // default locale
    messages: {
        en,
        uk,
    },
});

// Mount the app with Vue I18n
app.use(i18n).mount('#app');
