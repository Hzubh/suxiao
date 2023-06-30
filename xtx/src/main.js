import { createApp, } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

import '@/styles/common.scss'
import {lazyPlugins}  from '@/directives/index'
import {componentPlugin} from '@/components'
const app = createApp(App)
const pinia =createPinia();
//注册
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(lazyPlugins)
app.use(componentPlugin)
app.use(router)
app.mount('#app')

app.use()