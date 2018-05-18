import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HelloWorld from '../components/HelloWorld';
import Counter from '../components/Counter';

const router = new VueRouter({
    routes: [
        {
            path: '/hello',
            component: HelloWorld,
            meta: {
                title: 'Hello World',
            },
        },
        {
            path: '/counter',
            component: Counter,
            meta: {
                title: 'Counter',
            },
        },
        {path: '*', redirect: '/hello'},
    ],
});

module.exports = router;
