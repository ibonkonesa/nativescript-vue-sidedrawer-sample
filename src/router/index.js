import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';
import * as applicationSettings from 'tns-core-modules/application-settings'

Vue.use(VueRouter);

import HelloWorld from '../components/HelloWorld';
import Counter from '../components/Counter';
import Login from '../components/Login';
import Home from '../components/Home';

const router = new VueRouter({
    routes: [

        {
            path: '/login',
            component: Login,
            meta: {
                title: 'Login',
            },
        },


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

if (applicationSettings.hasKey('isLogged') && applicationSettings.getBoolean('isLogged')) router.replace('/home');
else router.replace('/login');
module.exports = router;
