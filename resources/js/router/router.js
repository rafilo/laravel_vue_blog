import {createRouter, createWebHistory} from 'vue-router'
import About from '../components/About/About.vue'
import Home from '../components/Home/Home.vue'
import Projects from '../components/Projects/Projects.vue'
import Blogs from '../components/Blogs/Blogs.vue'

const routes = [
    { path: '/', component: Home },
    { path:'/about', component: About},
    { path: '/blogs', component: Blogs},
    { path: '/projects', component: Projects}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
