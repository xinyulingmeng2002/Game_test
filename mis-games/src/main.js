import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 创建 Vue 实例并挂载到 #app
const app = createApp(App)
app.use(router)
app.mount('#app')