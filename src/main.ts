import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

Promise.resolve(1).then(console.log)

createApp(App).mount('#app')
