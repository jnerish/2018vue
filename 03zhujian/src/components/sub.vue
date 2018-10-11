<template>
    <div>test
        <input type="button" name="" id="" value="我是儿子在呼ss叫" @click="call" />
    </div>
</template>
<script>
import connect from '../connector.js'
export default {
    methods: {
        call() {
            connect.$emit('phone', '我是小宝')
        }
    }
}
</script>
<style>
</style>
