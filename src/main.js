// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import '../static/css/style.css'
import '../static/css/responsive-menu.css'

import '../static/script/index.js'
// import '../static/css/main.css'

Vue.use(iView);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
