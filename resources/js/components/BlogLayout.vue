<script>
import BlogHeader from "./BlogHeader.vue";

export default {
    name: "BlogLayout",
    components: {
        BlogHeader
    }
}
</script>

<template>
    <div id="BlogLayout">
        <el-container>
            <el-header
                class="relative border-b border-solid border-b-gray-200 p-0 w-full h-full bg-white dark:bg-[#242424] dark:border-b-gray-900 shadow-lg">
                <BlogHeader/>
            </el-header>
            <el-container>
                <el-main><h1 class="text-black dark:text-white text-3xl font-bold underline">
                    Hello world!
                </h1></el-main>
            </el-container>
        </el-container>
    </div>

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
