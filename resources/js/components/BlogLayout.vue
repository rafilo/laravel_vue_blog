<script>
import BlogMenu from "./BlogMenu.vue";
import BlogHeader from "./BlogHeader.vue";

export default {
    name: "BlogLayout",
    components: {
        BlogMenu,
        BlogHeader
    }
}
</script>

<template>
    <div id="BlogLayout">
    <el-container>
        <el-header><BlogHeader/></el-header>
        <el-container>
            <el-aside width="200px"><BlogMenu/></el-aside>
            <el-main><h1 class="text-3xl font-bold underline">
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
        /deep/.el-header{
            padding:0
        }
        #BlogMenu{
            height:100%;
            /deep/.el-menu {
                height: 100% !important;
            }
        }

    }
}
</style>
