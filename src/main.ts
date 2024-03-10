import { createApp } from 'vue'
import App from './App.vue'
// 引入路由文件
import router from "@/router"
// 引入reset-css清除各个浏览器之间的样式差异
import 'reset-css'
// 引入公共样式文件
import '@/assets/common.scss'

const app = createApp(App)

app.use(router);
app.mount('#app')
