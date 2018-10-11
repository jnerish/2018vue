import Vue from 'vue';
import VueResource from 'vue-resource';

import App from './app.vue';
import Footer from './components/footer.vue'


Vue.component('footerVue', Footer)
Vue.use(VueResource);

//引入mockjs
require('./mock.js')
new Vue({
    el: '#app',
    render: c => c(App),
})

Vue.filter('getYMD', function(input) {
    return input.split(' ')[0];
})
