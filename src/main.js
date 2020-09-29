import Vue from 'vue'
import App from './App.vue'
import store from './store/todo'

Vue.config.productionTip = false
Vue.prototype.$store = store  // 全局属性

new Vue({
  render: h => h(App),
}).$mount('#app')
