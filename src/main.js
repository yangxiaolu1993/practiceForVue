// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import myRouter from './router/index'

import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
import Main from 'yxl-npm'

Vue.use(Main)

NutUI.install(Vue);

Vue.config.productionTip = false

import "./util/rem"

new Vue({
  el: '#app',
  router,
  myRouter,
  components: { App },
  template: '<App/>'
})
