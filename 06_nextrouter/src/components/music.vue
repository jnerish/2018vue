<template>
    <div class="a">
        <router-link :to="{name:'guochan'}">国产音乐</router-link>
        <router-link :to="{name:'oumei'}">欧美音乐</router-link>
        <router-view class='a'></router-view>
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
.a {
    height: 90px;
    border: 1px solid red;
}
</style>
