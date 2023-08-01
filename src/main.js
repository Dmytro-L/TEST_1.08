import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import * as components from 'vuetify/components'
import { createVuetify } from 'vuetify';
import { VuelidatePlugin } from '@vuelidate/core'; 
import 'vuetify/dist/vuetify.min.css';

const vuetify = createVuetify({ components });
const app = createApp(App);

app.use(router).use(vuetify).use(VuelidatePlugin).mount('#app');
