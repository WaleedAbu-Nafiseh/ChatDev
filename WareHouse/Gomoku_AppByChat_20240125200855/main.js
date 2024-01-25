
import Vue from 'vue';
import App from './App.vue'; // The main App.vue file that includes our HelloWorld component
Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
}).$mount('#app');