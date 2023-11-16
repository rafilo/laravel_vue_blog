<script>
import { Search, Minus } from '@element-plus/icons-vue'
export default {
    name: "BlogHeader",
    components:{
        Search,
        Minus
    },
    data(){
        return{
            input: ''
        }
    }
}
</script>

<template>
   <div class="h-full bg-black text-white">header</div>
</template>

<style scoped lang="less">

</style>
