
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { getcategary } from './apis/testapi'
import '@/styles/common.scss'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
getcategary().then(res =>{
    console.log(res)
})