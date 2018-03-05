// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import resource from 'vue-resource';
import 'common/stylus/index.styl';

Vue.use(resource);
Vue.use(router);

export default new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router
});
