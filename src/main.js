// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from  './store'
Vue.config.productionTip = false

Vue.use(VueResource);
// 去掉eslint审查代码
// 测试测试测试测试
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store ,
  template: '<App/>',
  components: { App }
})
