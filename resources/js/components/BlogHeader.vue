<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { onMounted, onUnmounted, getCurrentInstance } from 'vue'

const router = useRouter();
const isNightMode = ref(false);
const navRoutes = ref([
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Blogs",
        url: "/blogs"
    },
    {
        name: "Projects",
        url: "/projects"
    },
    {
        name: "About",
        url: "/about"
    },
])

const active = computed(() => router.currentRoute.value.path);
const {proxy} = getCurrentInstance();

function switchTheme(isNightMode) {
    if (isNightMode) {
        localStorage.theme = 'dark'
        document.documentElement.classList.remove('light')
        document.documentElement.classList.add('dark')
    } else {
        localStorage.theme = 'light'
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
    }
}

function initTheme(){
    let storedTheme = localStorage.theme
    if (storedTheme && storedTheme === 'dark'){
        isNightMode.value = true
        document.documentElement.classList.remove('light')
        document.documentElement.classList.add('dark')
    } else {
        isNightMode.value = false
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
    }
}

function adminLogin(){
    proxy.$axios("/test").then((response)=>{
        console.log(response)
    }).catch(()=>{
        console.log('here')
    })
}

onMounted(()=>{
    initTheme()
})

</script>

<template>
    <div class="flex justify-between items-center p-4">
        <a href="https://element-plus.org/en-US/">
            <el-text class="sr-only">Element Plus</el-text>
            <img
                src="https://element-plus.org/images/element-plus-logo.svg"
                alt="Element Plus"
                class="block max-w-none"
                width="120"
                height="28"
            />
        </a>

        <nav >
            <div class="flex items-center space-x-6">
                <router-link
                    v-for="(link, index) in navRoutes"
                    :key="index"
                    :to="active === link.url ? '' : link.url"
                    :class="active === link.url ? 'text-blue-500 underline decoration-blue-500' : 'dark:text-white'"
                    class="link-item theme-color-changer"
                >
                    {{ link.name }}
                </router-link>
            </div>
        </nav>

        <div class="block">
            <el-button @click="adminLogin">Log in</el-button>
            <el-switch
                v-model="isNightMode"
                style="--el-switch-on-color: #6b6d71; --el-switch-off-color: #409EFF"
                active-action-icon="Moon"
                inactive-action-icon="Sunny"
                @change="switchTheme"
            >
            </el-switch>
        </div>
    </div>
</template>

<style scoped lang="less">

</style>
