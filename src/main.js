import Vue from 'vue'
import App from './App.vue'
import VueSuggestion from 'vue-suggestion';


Vue.config.productionTip = false
Vue.use(VueSuggestion);
new Vue({
  render: h => h(App),
}).$mount('#app')
