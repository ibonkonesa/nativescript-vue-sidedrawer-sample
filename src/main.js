import Vue from 'nativescript-vue';
import router from './router';
import store from './store';

import './styles.scss';

import Home from './components/Home';

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer);

new Vue({

    router,
    store,
    template: '<Home/>',
    components: {Home},

}).$start();


