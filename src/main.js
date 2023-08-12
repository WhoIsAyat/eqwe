import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import {routers} from '../src/router/index'

const app = createApp(App)
app.use(routers)
app.mount('#app')
