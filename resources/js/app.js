import './bootstrap';
import { createApp } from 'vue';
import axios from 'axios';
import ElementPlus from 'element-plus';
import App from './App.vue'
import router from './router/router.js'
import mitt from 'mitt'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css';

const app = createApp(App);
const emitter = mitt()

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$eventbus = emitter;
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus);
app.use(router);
app.mount('#app');
