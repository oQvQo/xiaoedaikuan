import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import TabBar from "@/components/TabBar";


// Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component('TabBar',TabBar );
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
