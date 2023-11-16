<script>
import {Sunny, Moon} from '@element-plus/icons-vue'

export default {
    name: "BlogHeader",
    components: {
        Sunny,
        Moon
    },
    data() {
        return {
            isNightMode: false,
        }
    },
    methods: {
        changeTheme(isNightMode) {
            if (isNightMode) {
                localStorage.theme = 'dark'
                document.documentElement.classList.remove('light')
                document.documentElement.classList.add('dark')
            } else {
                localStorage.theme = 'light'
                document.documentElement.classList.remove('dark')
                document.documentElement.classList.add('light')
            }
        },
    }
}
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

        <nav>
            <ul class="flex items-center space-x-6">
                <li>
                    <el-link
                        href="https://element-plus.org/en-US/guide/design.html"
                        target="_blank"
                        class="dark:text-white"
                    >
                        Guide
                    </el-link>
                </li>
                <li>
                    <el-link
                        href="https://element-plus.org/en-US/component/button.html"
                        target="_blank"
                        class="dark:text-white"
                    >
                        Component
                    </el-link>
                </li>
                <li>
                    <el-link
                        href="https://element-plus.org/en-US/resource/index.html"
                        target="_blank"
                        class="dark:text-white"
                    >
                        Resource
                    </el-link>
                </li>
                <li>
                    <el-link
                        href="/"
                        target="_blank"
                        class="dark:text-white"
                    >
                        About
                    </el-link>
                </li>
            </ul>
        </nav>

        <div class="block">
            <el-button>Log in</el-button>
            <el-switch
                v-model="isNightMode"
                style="--el-switch-on-color: #2F2F2F; --el-switch-off-color: #409EFF"
                active-action-icon="Moon"
                inactive-action-icon="Sunny"
                @change="changeTheme"
            >
            </el-switch>
        </div>
    </div>
</template>

<style scoped lang="less">

</style>
