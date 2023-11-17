import './bootstrap';
import { createApp } from 'vue';
import axios from 'axios';
import ElementPlus from 'element-plus';
import App from './App.vue'
import router from './router/router.js'
import store from './store/index.js'

import mitt from 'mitt'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css';

import hljs from "highlight.js";
import "highlight.js/styles/a11y-dark.css";

hljs.configure({
    ignoreUnescapedHTML: true, // post页面因为目录遍历node节点而莫名其妙警告
});

const app = createApp(App);
const emitter = mitt()

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$eventbus = emitter;

// import element-ui icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// register a global command, will be triggered when mounted and updated
app.directive("highlight", function (el) {
    let codeElements = el.querySelectorAll("pre code");
    codeElements.forEach((elem) => {
        hljs.highlightElement(elem);
    });
});

app.use(ElementPlus);
app.use(router);
app.use(store)
app.mount('#app');
