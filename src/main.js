import Vue from 'nativescript-vue';
import router from './router';
import store from './store';
import App from './App';

import './styles.scss';

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer);

new Vue({
    router,
    store,
    template: '<App/>',
    components: { App }

}).$start();


