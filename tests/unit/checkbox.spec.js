import { shallowMount } from '@vue/test-utils';
import Checkbox from '@/components/checkbox/checkbox.vue';

const text = 'I\'m a checkbox';

// 默认复选框
describe('default checkbox', () => {
  // 存在且是Vue组件实例
  it('is a vue instance', () => {
    const wrapper = shallowMount(Checkbox);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  // 包含特定类名
  it('contains specific classnames', () => {
    const wrapper = shallowMount(Checkbox);
    expect(wrapper.is('.ms-checkbox-container')).toBeTruthy();
    expect(wrapper.is('.ms-checkbox-container')).toBeTruthy();
    expect(wrapper.contains('.ms-checkbox')).toBeTruthy();
    expect(wrapper.contains('.ms-checkbox__icon')).toBeTruthy();
    expect(wrapper.contains('.ms-checkbox__slot')).toBeTruthy();
  });
  // 被点击时会触发change事件
  it('emits the change event when clicked', () => {
    const wrapper = shallowMount(Checkbox);
    wrapper.trigger('click');
    expect(wrapper.emitted('change')).toBeTruthy();
  });
});

// 内嵌元素或文本的复选框
describe('checkbox having one or more slots', () => {
  // 正确渲染内嵌文本
  it('renders string slot when passed', () => {
    const wrapper = shallowMount(Checkbox, {
      slots: {
        default: text
      }
    });
    expect(wrapper.find('.ms-checkbox__slot').text()).toMatch(text);
  });
});

// 禁用状态的复选框
describe('disabled checkbox', () => {
  // 有一个为真的disabled属性值
  it('has a truthy property named \'disabled\'', () => {
    const wrapper = shallowMount(Checkbox, {
      propsData: {
        disabled: true
      }
    });
    expect(wrapper.props().disabled).toBeTruthy();
    expect(wrapper.vm.$props.disabled).toBeTruthy();
  });
  // 不能触发change事件
  it('cannot emit the change event when clicked', () => {
    const wrapper = shallowMount(Checkbox, {
      propsData: {
        disabled: true
      }
    });
    wrapper.trigger('click');
    expect(wrapper.emitted('change')).toBeFalsy();
  });
});
