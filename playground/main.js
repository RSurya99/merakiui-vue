import { createApp } from 'vue'
import App from './App.vue'
import { merakiuiVue } from '../src/index'
import './assets/css/vendor.css'

createApp(App).use(merakiuiVue).mount('#app')
