
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import axios from 'axios'
import {get,post} from './request/http.js'
import Element from 'element-ui';
Vue.use(ElementUI);
Vue.use(Element, { size: 'small', zIndex: 3000 });

Vue.config.productionTip = false
Vue.prototype.$http = {get,post};
new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
