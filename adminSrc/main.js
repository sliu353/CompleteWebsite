import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

// Drag and drop sorting plugin.
import Sortable from 'vue-sortable';
Vue.use(Sortable);

import App from './App.vue';
import Admin from './components/Admin.vue';
//import DisplayItem from './components/DisplayItem.vue';
//import EditItem from './components/EditItem.vue';

//import 
//var pages = JSON.parse(require('../navbar.json'));
//var titleHashDictionary = {};
//var routs = [];
//for (i = 0; i < pages.length; i++) {
//    
//    routes.push({
//        name: page.
//    });
//}


Vue.directive('sortable', {
    inserted: function (el, binding) {
      new Sortable(el, binding.value || {})
    }
  });

const routes = [
    {
        name: 'Edit',
        path: '/admin',
        component: Admin
    }
    //{
    //    name: 'DisplayItem',
    //    path: '/',
    //    component: DisplayItem
    //},
    //{
    //    name: 'EditItem',
    //    path: '/edit/:id',
    //    component: EditItem
    //}
];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');