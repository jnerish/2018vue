<template>
    <div>我是音乐
        <input type="button" value="跳转到电影" @click="goMovie">
        <input type="button" value="返回上一页" @click="go">
        <input type="button" value="返回下一页" @click="goback">
    </div>
</template>
<script>
export default {
    data() {
            return {

            }
        },
        methods: {
            goMovie() {
                // this.$router.push('/movie');
                this.$router.push({
                    name: 'movie'
                });
            },
            go() {
                this.$router.go(-1)
            },
            goback() {
                this.$router.go(1)
            }
        }
}
</script>
<style>
</style>
