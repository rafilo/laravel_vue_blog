<script>
import {
    Document,
    Setting,
    Tools,
    Operation,
    PieChart,
    Platform,
    DataAnalysis,
    Menu as IconMenu,
    SetUp,
    List
} from '@element-plus/icons-vue'
export default {
    name: "BlogMenu",
    components:{
        Document,
        Setting,
        Tools,
        Operation,
        PieChart,
        Platform,
        DataAnalysis,
        IconMenu,
        SetUp,
        List
    },
    data(){
        return {

        }
    },
    methods:{
        handleOpen(){
            console.log('open')
        },
        handleClose(){
            console.log('close')
        }
    }
}
</script>

<template>
    <div id="BlogMenu">
        <el-menu
            background-color="#3B82F6"
            text-color="#fff"
            active-text-color="#fff"
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
        >
            <el-menu-item index="1">
                <el-icon><platform /></el-icon>
                <span>Dashboard</span>
            </el-menu-item>
            <el-sub-menu index="2">
                <template #title>
                    <el-icon><icon-menu/></el-icon>
                    <span>Interface</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">
                        <el-icon><tools/></el-icon>
                        <span>Components</span>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <el-icon><operation/></el-icon>
                        <span>Utilities</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="3">
                <template #title>
                    <el-icon><set-up/></el-icon>
                    <span>Addons</span>
                </template>
                <el-menu-item-group >
                    <el-menu-item index="3-1">
                        <el-icon><document/></el-icon>
                        <span>Pages</span>
                    </el-menu-item>
                    <el-menu-item index="3-2">
                        <el-icon><pie-chart/></el-icon>
                        <span>Charts</span>
                    </el-menu-item>
                    <el-menu-item index="3-2">
                        <el-icon><data-analysis/></el-icon>
                        <span>Tables</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<style lang="less" scoped>

</style>
