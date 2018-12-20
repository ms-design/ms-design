import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import MSDesign from '../src';
import ShowComponents, { Item as ShowComponentsItem } from './components/show-components';
import ShowIcon from './components/show-icon';

Vue.config.productionTip = false;

Vue.use(MSDesign);
Vue.component(ShowComponents.name, ShowComponents);
Vue.component(ShowComponentsItem.name, ShowComponentsItem);
Vue.component(ShowIcon.name, ShowIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
