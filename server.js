// require dependencies
var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');

// use vue-router and vue-resource
Vue.use(VueRouter);
Vue.use(VueResource);

// Routing
var router = new VueRouter();

var App = Vue.extend();

// start router in element with id of app
router.start(App, '#app');