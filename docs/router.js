import Vue from 'vue';
import Router from 'vue-router';
import ButtonPage from './views/button.vue';
import CheckboxPage from './views/checkbox.vue';
import IndexPage from './views/index.vue';
import InputPage from './views/input.vue';
import IconPage from './views/icon.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/button',
      name: 'button',
      component: ButtonPage
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: CheckboxPage
    },
    {
      path: '/input',
      name: 'input',
      component: InputPage
    },
    {
      path: '/icon',
      name: 'icon',
      component: IconPage
    }
  ]
});
