import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // Importez le magasin Vuex

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')