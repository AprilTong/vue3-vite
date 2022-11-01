import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'element-plus/dist/index.css'
import './assets/css/reset.less'
import './assets/iconfont/iconfont.css'

createApp(App).use(ElementPlus).use(router).use(store).mount('#app')
