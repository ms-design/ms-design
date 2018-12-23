import { shallowMount } from '@vue/test-utils';
import Input from '@/components/input/input.vue';

const text = 'I\'m a input';

// 默认输入框
describe('default input', () => {
  // 存在且是Vue组件实例
  it('is a vue instance', () => {
    const wrapper = shallowMount(Input);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  // 包含特定类名
  it('contains specific classnames', () => {
    const wrapper = shallowMount(Input);
    const classes = wrapper.classes();
    expect(classes).toContain('ms-input');
  });
  // 正确显示输入文本
  it('shows text correctly', () => {
    const wrapper = shallowMount(Input);
    wrapper.setValue(text);
    expect(wrapper.element.value).toEqual(text);
  });
  // 聚焦或失去焦点或输入文本时触发自定义事件
  it('emits custom event when focused or blurred or input', () => {
    const wrapper = shallowMount(Input);
    wrapper.setValue(text);
    expect(wrapper.emitted('input')).toBeTruthy();
    expect(wrapper.emitted('input')[0]).toEqual([text]);
    wrapper.trigger('focus');
    expect(wrapper.emitted('focus')).toBeTruthy();
    wrapper.trigger('blur');
    expect(wrapper.emitted('blur')).toBeTruthy();
  });
});

// 禁用状态的输入框
describe('disabled input', () => {
  // 正确显示文本
  it('shows text correctly', () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        value: text,
        disabled: true
      }
    });
    expect(wrapper.props('value')).toEqual(text);
  });
  // 聚焦或失去焦点或输入文本时不能触发自定义事件
  it('cannot be focused or blurred or input', () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        disabled: true
      }
    });
    wrapper.setValue(text);
    expect(wrapper.emitted('input')).toBeFalsy();
    wrapper.trigger('focus');
    expect(wrapper.emitted('focus')).toBeFalsy();
    wrapper.trigger('blur');
    expect(wrapper.emitted('blur')).toBeFalsy();
  });
});

// 有占位符的输入框
describe('input having placeholder', () => {
  // 正确显示占位符
  it('shows placeholder correctly', () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        placeholder: text
      }
    });
    expect(wrapper.props().placeholder).toEqual(text);
    expect(wrapper.vm.$props.placeholder).toEqual(text);
  });
});
