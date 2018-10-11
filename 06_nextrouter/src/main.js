import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './app.vue';
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Movie from './components/movie.vue'
import Music from './components/music.vue'
import Oumei from './components/oumei.vue'
import Guochan from './components/guochan.vue'


Vue.component('headerVue', Header)
Vue.component('footerVue', Footer)

Vue.use(VueRouter);

let router = new VueRouter({
    routes: [{
            path: '/',
            redirect: { name: 'movie' }
        }, {
            path: '/music',
            name: 'music',
            component: Music,
            children: [
                { name: 'oumei', path: 'oumei', component: Oumei },
                { name: 'guochan', path: 'guochan', component: Guochan }
            ]
        },
        { path: '/movie', name: 'movie', component: Movie }
    ]
});
new Vue({
    el: '#app',
    router,
    render: c => c(App),
})
