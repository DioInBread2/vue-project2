import { createApp } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
//引入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'


createApp(App).use( ElementPlus , {
    locale: zhCn,
  }).mount('#app')

