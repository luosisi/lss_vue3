import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import { store } from './store/index'

import axios from './utils/axios'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// import { ElButton } from 'element-plus'

const app = createApp(App)

// .use(ElementPlus)

// app.use(ElButton)
app.config.globalProperties.$axios = axios
app.use(router).use(store).mount('#app')
