import "choices.js/public/assets/styles/choices.min.css";
import "choices.js/public/assets/scripts/choices.min.js";
import './assets/css/main.css'
import './assets/css/breakpoints.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
