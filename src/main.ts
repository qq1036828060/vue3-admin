import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementPlus from "element-plus";

import "@/assets/styles/reset.scss";
import "@/assets/styles/common.scss";
// element css
import "element-plus/dist/index.css";
// element dark css
import "element-plus/theme-chalk/dark/css-vars.css";
// custom element dark css
import "@/assets/styles/element-dark.scss";
// custom element css
import "@/assets/styles/element.scss";

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
