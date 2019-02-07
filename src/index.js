import './assets/styles/base.less';
import Button from './components/button';
import Radio from './components/radio';
import Checkbox from './components/checkbox';
import Input from './components/input';
import Icon from './components/icon';
import Select from './components/select';
import Slider from './components/slider';
import Toggle from './components/toggle';
import Tooltip from './components/tooltip';
import ProgressRing from './components/progressRing';

const components = {
  Button,
  Radio,
  RadioGroup: Radio.Group,
  Checkbox,
  Input,
  Icon,
  Select,
  Slider,
  Toggle,
  Tooltip,
  ProgressRing
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
