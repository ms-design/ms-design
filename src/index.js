import './assets/styles/base.less';
import Button from './components/button';
import Checkbox from './components/checkbox';
import Input from './components/input';
import Icon from './components/icon';

const components = {
  Button,
  Checkbox,
  Input,
  Icon
};

const install = function(Vue) {
  if (install.installed) {
    return;
  }
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });
};

// auto install by cdn
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
};
