import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { BootstrapVue } from 'bootstrap-vue'
// import { ButtonPlugin } from 'bootstrap-vue'
// Vue.use(ButtonPlugin)

const app = createApp(App)
app.use(router)
// app.use(ButtonPlugin)
app.mount('#app')

