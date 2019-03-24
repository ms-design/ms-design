import { mount } from '@vue/test-utils';
import Collapse from '@/components/transitions/collapse.vue';

// 默认单选框组合
describe('default tree', () => {
  // 存在且是Vue组件实例
  it('is a vue instance', () => {
    const wrapper = mount(Collapse);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  // 插槽
  it('renders htmltext slot when passed', () => {
    const text = '<span>element</span>';
    const wrapper = mount(Collapse, {
      slots: {
        default: text
      }
    });
    expect(wrapper.html()).toMatch(text);
  });
});
