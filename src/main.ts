import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import "@/assets/styles/reset.scss";
import "@/assets/common.scss";
// element css
import "element-plus/dist/index.css";
// element dark css
import "element-plus/theme-chalk/dark/css-vars.css";
// custom element dark css
import "@/assets/element-dark.scss";
// custom element css
import "@/assets/element.scss";

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
