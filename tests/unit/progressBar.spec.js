import { shallowMount } from '@vue/test-utils';
import ProgressBar from '@/components/progressBar/progressBar.vue';

// 默认按钮
describe('default progressBar', () => {
  // 存在且是Vue组件实例
  it('is a vue instance', () => {
    const wrapper = shallowMount(ProgressBar);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  // 包含特定类名
  it('contains specific classnames', () => {
    const wrapper = shallowMount(ProgressBar);
    const classes = wrapper.classes();
    expect(classes).toContain('ms-progress-bar');
  });
});
