import ProgressBar from './progressBar.vue';

ProgressBar.install = function(Vue) {
  Vue.component(ProgressBar.name, ProgressBar);
};

export default ProgressBar;
