import { createApp } from 'vue'
import pinia from './pinia/store';
import App from './App.vue'

createApp(App).use(pinia).mount('#app')
