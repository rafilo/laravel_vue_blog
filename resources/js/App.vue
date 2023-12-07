<script setup>
import { nextTick, onMounted, provide, ref } from "vue";
import BlogHeader from "./components/BlogHeader.vue";
const viewPortHeight = document.documentElement.clientHeight - 64;

let pageScrolled = ref(false);
let curScrollTop = ref(0);
// provide() can only be used inside setup().
provide("scrollTop", curScrollTop);

// listen to scroll event
function onScroll(scrollTop) {
    // 向navbar传递阴影控制参数
    pageScrolled.value = scrollTop ? true : false;
    // provide响应式滚动高度
    curScrollTop.value = scrollTop;
    // console.log(curScrollTop.value);
}
</script>

<template>
    <el-container>
        <el-header
            class="relative border-b border-solid border-b-gray-200 p-0 w-full h-full bg-white dark:bg-[#242424] dark:border-b-gray-900 shadow-lg">
            <BlogHeader />
        </el-header>
        <el-container>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer></el-footer>
        </el-container>
    </el-container>
</template>

<style lang="less" scoped>
#BlogLayout {
    height: 100%;

    .el-container {
        height: 100%;

        /deep/ .el-header {
            padding: 0
        }

        #BlogMenu {
            height: 100%;

            /deep/ .el-menu {
                height: 100% !important;
            }
        }

    }
}
</style>
