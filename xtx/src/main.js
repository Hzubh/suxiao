import { createApp, } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/styles/common.scss'
import {lazyPlugins}  from '@/directives/index'
import {componentPlugin} from '@/components'
const app = createApp(App)

app.use(createPinia())
app.use(lazyPlugins)
app.use(componentPlugin)
app.use(router)
app.mount('#app')

app.use()