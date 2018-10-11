<template>
    <div>
        <!--  查询字符串查询列表
        <ul>
            <li v-for="(lis,index) in list" :key='index'>
                {{lis.name}}
                <router-link :to="{name:'detail',query:{id:index}}">查看</router-link>
            </li>
        </ul> -->
        path方式查询
        <ul>
            <li v-for="(lis,index) in list" :key='index'>
                {{lis.name}}
                <router-link :to="{name:'detail',params:{name:index}}">查看</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                name: 'anne'
            }, {
                name: 'pick'
            }]
        }
    }
}
</script>
<style>
</style>
