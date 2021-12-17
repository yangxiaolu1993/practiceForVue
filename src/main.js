// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import myRouter from './router/index'
Vue.config.productionTip = false

import NutUI from '@nutui/nutui';
// import '@nutui/nutui/dist/nutui.css';
NutUI.install(Vue);

// import NutUICat from "@nutui/nutui-cat";
// import "@nutui/nutui-cat/dist/nutui-cat.css";
// NutUICat.install(Vue)

// import Tag from "@nutui/nutui-cat/lib/tag/index.js";
// Vue.use(Tag)

// import "@nutui/nutui-cat/lib/tag/index.css"

import "./util/rem"

// import Vant from 'vant';
// import 'vant/lib/index.css';

// Vue.use(Vant);


import { textA , textB,  HelloWord } from  "yxl-npm";
// console.log(textA)
// // textA.install(Vue)
Vue.use(textA);
Vue.use(textB);

// import 'yxl-npm/lib/css/textA.f06669ba.css'

// 注册全局 svg-icon 组件，用于 icon 图标的展示
import SvgIcon from './component/icon'
Vue.component('SvgIcon', SvgIcon)

new Vue({
  el: '#app',
  router,
  myRouter,
  components: { App },
  template: '<App/>'
})
