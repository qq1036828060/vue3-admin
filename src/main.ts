import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import "@/styles/reset.scss";
import "@/styles/common.scss";
// element css
import "element-plus/dist/index.css";
// element dark css
import "element-plus/theme-chalk/dark/css-vars.css";
// custom element dark css
import "@/styles/theme/element-dark.scss";
// custom element css
import "@/styles/element.scss";

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
