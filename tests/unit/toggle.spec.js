import { shallowMount } from '@vue/test-utils';
import Toggle from '../../src/components/toggle/toggle.vue';

// 默认开关
describe('default toggle', () => {
  // 存在且是Vue组件实例
  it('is a vue instance', () => {
    const wrapper = shallowMount(Toggle);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  // 包含特定类名
  it('contains specific classnames', () => {
    const wrapper = shallowMount(Toggle);
    expect(wrapper.is('.ms-toggle')).toBeTruthy();
    expect(wrapper.contains('.ms-toggle__button')).toBeTruthy();
  });
  // 被点击时会触发change事件
  it('emits the change event when clicked', () => {
    const wrapper = shallowMount(Toggle);
    wrapper.trigger('click');
    expect(wrapper.emitted('change')).toBeTruthy();
  });
});

// 禁用状态的开关
describe('disabled toggle', () => {
  // 有一个为真的disabled属性值
  it('has a truthy property named \'disabled\'', () => {
    const wrapper = shallowMount(Toggle, {
      propsData: {
        disabled: true
      }
    });
    expect(wrapper.props().disabled).toBeTruthy();
    expect(wrapper.vm.$props.disabled).toBeTruthy();
  });
  // 不能触发change事件
  it('cannot emit the change event when clicked', () => {
    const wrapper = shallowMount(Toggle, {
      propsData: {
        disabled: true
      }
    });
    wrapper.trigger('click');
    expect(wrapper.emitted('change')).toBeFalsy();
  });
});
