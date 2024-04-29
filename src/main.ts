import { createApp } from 'vue'
import './scss/main.scss'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createPinia } from 'pinia'
import '@progress/kendo-theme-bootstrap/dist/all.css';

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(VueAxios, axios)

app.mount('#app')
