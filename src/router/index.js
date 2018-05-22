import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HelloWorld from '../components/HelloWorld';
import Counter from '../components/Counter';

import Home from '../components/Home';

const router = new VueRouter({
    routes: [

        {
            path: '/home',
            component: Home,

            children: [
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

            ]
        },



    ],
});


router.push('/home');
module.exports = router;
