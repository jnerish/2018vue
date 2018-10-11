<template>
    <div id="app">
        <bodyvue textone='大'></bodyvue>
        <headervue v-bind:texttwo='tet'></headervue>
        <footervue></footervue>
        <subvue></subvue>
        <input type="button" name="" id="" value="我的爸爸在听" @click="listen" /> 请输入：
        <input type="text" name="" id="" value="" v-model="text" /> {{text|firterbig}}
        <div ref='hello'></div>
        <subvue></subvue>
        <!--<mt-header title="multiple button">
 <router-link to="/" slot="left">
    <mt-button icon="back">back</mt-button>
    <mt-button @click="handleClose">close</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>-->
        <router-view></router-view>
        <bodyvue></bodyvue>
    </div>
</template>
<script>
import connect from './connector.js'
export default {
    id: '#app',
    data() {
        return {
            tet: 'dd',
            text: ''
        }
    },
    //created(){
    //  console.log('created:',this.$refs.hello)
    //},
    //mounted(){
    //  console.log('mounted:',this.$refs.hello);
    //  this.$refs.hello.innerText='ee'
    //},
    //filters:{
    //  firterbig(value){
    //    return value.split('').reverse().join('')
    //  }
    //},
    methods: {
        listen() {
            connect.$on('phone', function(msg) {
                console.log(msg)
            })
        }
    }
}
</script>
<style>
.red {
    background-color: red;
}

.green {
    background-color: green;
}

.blue {
    background-color: blue;
}

.pink {
    background-color: pink;
}

.big {
    font-size: 20px;
}
</style>
