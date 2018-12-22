import Radio from './radio.vue';
import RadioGroup from './radio-group.vue';

Radio.install = function(Vue) {
  Vue.component(Radio.name, Radio);
  Vue.component(RadioGroup.name, RadioGroup);
};

Radio.Group = RadioGroup;

export default Radio;
