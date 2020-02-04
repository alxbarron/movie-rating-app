import Vue from 'vue';
import VueSwal from 'vue-swal';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.use(VueSwal);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');
