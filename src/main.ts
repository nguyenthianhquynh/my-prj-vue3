import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueCookies from 'vue-cookies';

import App from './App.vue'
import router from './router'
import "./validation/validation"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueCookies)

app.mount('#app')
