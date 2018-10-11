<template>
    <div>
        列表内容
    </div>
</template>
<script>
export default {
    data() {
            return {

            }
        },
        created() {
            //获取路由参数
            //vue-router挂两个属性
            // $route(数据) $router
            console.log(this.$route.query);
            console.log(this.$route.params)
        },
        mounted() {

        },
}
</script>
<style>
</style>
