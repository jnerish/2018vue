<template>
    <div> 我是电影
        <input type="button" value="返回上一页" @click="go">
    </div>
</template>
<script>
export default {
    data() {
            return {

            }
        },
        methods: {
            go() {
                this.$router.go(-1)
            }
        }
}
</script>
<style>
</style>
