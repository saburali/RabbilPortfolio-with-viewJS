import { createApp } from 'vue'

import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// App CSS (Custom / Common Style)
import './global.css'

import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import router from "@/routes";

createApp(App).use(router, bootstrap).mount('#app')