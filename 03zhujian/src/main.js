import Vue from 'vue'
import App from './App.vue'
import bodyVue from './components/body.vue'
import headerVue from './components/header.vue'
import footerVue from './components/footer.vue'
import subVue from './components/sub.vue'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
//引入
import VueRouter from 'vue-router'

Vue.use(MintUi)
//挂载
Vue.use(VueRouter);

Vue.component('bodyvue',bodyVue)
Vue.component('headervue',headerVue)
Vue.component('footervue',footerVue)
Vue.component('subvue',subVue)


let router=new VueRouter({
	routes:[
	{path:'/home',component:bodyVue}
	]
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
