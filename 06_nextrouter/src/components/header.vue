<template>
    <div class="h">
        <a href="#/">首页</a>
        <router-link :to="{name:'music'}">音乐</router-link>
        <router-link :to="{name:'movie'}">电影</router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style scoped>
.h {
    height: 100px;
    border: 1px solid yellow
}
</style>
