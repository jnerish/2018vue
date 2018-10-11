<template>
    <div>
        <div class="h">
            <router-link :to="{name: 'music'}">进入音乐</router-link>
            <router-link :to="{name: 'movie'}">进入电影</router-link>
            <router-link to='/music'>进入音乐</router-link>
            <router-link to='/movie'>进入电影</router-link>
            <router-link :to="{name:'list'}">进入列表</router-link>
        </div>
        <!-- 留坑，非常重要 -->
        <div class="m">
            <router-view></router-view>
        </div>
        <div class="f">
            <input type="button" @click='goMusic' value="跳转到音乐">
        </div>
    </div>
</template>
<script>
export default {
    data() {
            return {

            }
        },
        methods: {
            goMusic() {
                this.$router.push('/music')
            }
        }


}
</script>
<style>
.h {
    height: 100px;
    border: 1px solid #ddd;
}

.m {
    height: 100px;
    border: 1px solid green;
}

.f {
    height: 100px;
    border: 1px solid red;
}
</style>
