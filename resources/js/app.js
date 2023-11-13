import { createApp, h } from 'vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Home from "./components/Home.vue";

createApp({})
    .component('home-component', Home)
    .use(ElementPlus)
    .mount("#app")
