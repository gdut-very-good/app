/*global Vue*/
/* weex initialized here, please do not move this line */
// const {router} = require('./router');
const App = require('@/index.vue');
// const store = require('@/store/index');
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root'}, App));
router.push('/');


