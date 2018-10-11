import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './app.vue';
import Home from './components/home.vue';
import Nofound from './components/nofound.vue';
import Header from './components/header.vue'
import Footer from './components/footer.vue'



Vue.use(VueRouter);

let router = new VueRouter({
    routes: [{
            path: '/',
            components: { //多视图
                header: Header,
                footer: Footer,
                default: Footer
            }
        },
        { path: '/home', name: 'home', component: Home },
        { path: '*', component: Nofound }
    ]
});
new Vue({
    el: '#app',
    router,
    render: c => c(App),
})
