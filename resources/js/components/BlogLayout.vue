<script>
import BlogMenu from "./BlogMenu.vue";
import BlogHeader from "./BlogHeader.vue";
export default {
    name: "BlogLayout",
    components:{
        BlogHeader,
        BlogMenu
    }
}
</script>

<template>
    <el-row class="blog-main-page">
        <BlogHeader />
        <el-col :span="6" style="height: 100%">
            <BlogMenu />
        </el-col>
        <el-col :span="18" style="overflow: auto">
            main page
        </el-col>
    </el-row>
</template>

<style scoped>

</style>
