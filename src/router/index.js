import Vue from 'vue';
import vueRouter from 'vue-router';
import seller from '../components/seller/seller';
import goods from '../components/goods/goods';
import ratings from '../components/ratings/ratings';

export default new vueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    }
  ]
});

Vue.use(vueRouter);
