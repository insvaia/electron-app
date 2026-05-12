import { createApp } from 'vue'
import App from './App.vue'

// 引入路由
import router from '@router/index'

// 引入 Pinia
import { createPinia } from 'pinia'
// 引入 Pinia 持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const store = createPinia()
store.use(piniaPluginPersistedstate)

import 'element-plus/es/components/message/style/css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(store)
app.mount('#app')
