import { shallowMount } from '@vue/test-utils';
import Button from '@/components/button/button.vue';

const text = 'I\'m a button';

// 默认按钮
describe('default button', () => {
  // 存在且是Vue组件实例
  it('is a vue instance', () => {
    const wrapper = shallowMount(Button);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  // 包含特定类名
  it('contains specific classnames', () => {
    const wrapper = shallowMount(Button);
    const classes = wrapper.classes();
    expect(classes).toContain('ms-button');
    expect(classes).toContain('ms-button_type-default');
    expect(classes).toContain('ms-button_size-default');
  });
  // 被点击时会触发click事件
  it('emits custom event when clicked', () => {
    const wrapper = shallowMount(Button);
    wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });
});

// 内嵌元素或文本的按钮
describe('button having one or more slots', () => {
  // 正确渲染内嵌文本
  it('renders string slot when passed', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: text
      }
    });
    expect(wrapper.text()).toMatch(text);
  });
});

// 禁用状态的按钮
describe('disabled button', () => {
  // 有一个为真的disabled属性值
  it('has a truthy property named \'disabled\'', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        disabled: true
      }
    });
    expect(wrapper.props().disabled).toBeTruthy();
    expect(wrapper.vm.$props.disabled).toBeTruthy();
  });
  // 被点击时不能触发click事件
  it('cannot emit the click event when clicked', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        disabled: true
      }
    });
    wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeFalsy();
  });
});
