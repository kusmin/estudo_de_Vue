import { createApp } from 'vue'
import App from './App.vue'
import Contadores from './components/Contadores.vue'

Vue.component('app-contadores', Contadores)

createApp(App).mount('#app')