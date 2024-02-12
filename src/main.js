import './assets/main.css'
import 'primevue/resources/themes/lara-dark-blue/theme.css'
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router';
import '@splidejs/vue-splide/css';
const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.mount('#app')
