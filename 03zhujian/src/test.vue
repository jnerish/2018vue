<template>
	<div id="test">
  	<div>
  		<pre>
  		*v-text
  		*v-html
  		*v-if
  		*v-show
  		*v-model
  	</pre>
  	v-text
    <span v-text="text"></span>
    v-html
    <span v-html="html"></span>
    v-show
    <div v-show="isShow" style="height: 20px;background-color: red;">   	
    </div>
    v-model
    <div>
    	我是input输入框<input type="text" v-model="stest" /> <br />
    	{{stest}}<br />
    	我是另外一个输入框<input type="text" v-bind:value="stest" />
    </div>
    <div v-bind:class="isRed?'red':'green'">222</div>
    <div :class="{red:true,big:true}">11111</div>
    <div>
    	<ul>
    		<li v-for="stu in stus" :class="{'A':'red','B':'green'}[stu.score]">
    			{{stu.name}}
    		</li>
    	</ul>
    </div>
    <input type="button" name="" id="" value="点击有效果" v-on:click="isRed = !isRed" />
  	<button v-on:click="changecolor()">dianj</button>
  	</div>
  	<div>
  		<ul>
  			<li v-for="(stu,index) in stus" :key='index' :class="{'A':'red','B':'green','C':'blue','D':'pink'}[stu.score]">{{stu.name}}{{stu.score}}<input type="button" name="" id="" value="delete" @click="del(index)"/></li>
  		</ul>
  		name:<input type="text" name="" id="" value="" v-model="name"/>
  		score:<input type="text" name="" id="" value="" v-model="score"/>
  		<input type="button" name="" id="" value="添加" @click="add" />
  	</div>
  </div>
</template>

<script>
	export default {
  id: '#test',
  data () {
    return {
    	name:'',
    	score:'',
      msg: 'hello',
      text:'大家好',
      html:`
      	<ul>
      	<li>haha</li>
      	<li>haha</li>
      	</ul>
      `,
      isShow:true,
      stest:'11111',
      list:[{name:'jne'},{name:'jan'}],
      isRed:false,
      stus:[{name:'rose',score:'A'},{name:'pik',score:'B'},{name:'nike',score:'C'},{name:'cc',score:'D'}]
    	}
   },
  methods:{
    	add(){
    		this.stus.push({
    			name:this.name,
    			score:this.score
    		});
    	this.name='';
    	this.score='';
    	},
    	del(index){
    		this.stus.splice(index,1)
    	}
  }
}
</script>

<style>
</style>