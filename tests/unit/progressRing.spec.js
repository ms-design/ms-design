import { shallowMount } from '@vue/test-utils';
import ProgressRing from '@/components/progressRing/progressRing.vue';

// 默认进度环
describe('default progressRing', () => {
  // 存在且是Vue组件实例
  it('is a vue instance', () => {
    const wrapper = shallowMount(ProgressRing);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  // 包含特定类名
  it('contains specific classnames', () => {
    const wrapper = shallowMount(ProgressRing);
    const classes = wrapper.classes();
    expect(classes).toContain('ms-progress-ring');
  });
});
