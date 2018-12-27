import { shallowMount } from '@vue/test-utils';
import Slider from '@/components/slider/slider.vue';

// 默认开关
describe('default slider', () => {
  // 存在且是Vue组件实例
  it('is a vue instance', () => {
    const wrapper = shallowMount(Slider);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  // 包含特定类名
  it('contains specific classnames', () => {
    const wrapper = shallowMount(Slider);
    expect(wrapper.is('.ms-slider')).toBeTruthy();
    expect(wrapper.contains('.ms-slider__progress')).toBeTruthy();
    expect(wrapper.contains('.ms-slider__input')).toBeTruthy();
  });
  // 拖动滑块时会触发input事件, 拖动结束后会触发change事件
  it('emits the input and change event when dragged', () => {
    const wrapper = shallowMount(Slider);
    wrapper.find('.ms-slider__input').trigger('input');
    expect(wrapper.emitted('input')).toBeTruthy();
    wrapper.find('.ms-slider__input').trigger('change');
    expect(wrapper.emitted('change')).toBeTruthy();
  });
});

// 禁用状态的开关
describe('disabled slider', () => {
  // 有一个为真的disabled属性值
  it('has a truthy property named \'disabled\'', () => {
    const wrapper = shallowMount(Slider, {
      propsData: {
        disabled: true
      }
    });
    expect(wrapper.props().disabled).toBeTruthy();
    expect(wrapper.vm.$props.disabled).toBeTruthy();
  });
  // 不能触发input和change事件
  it('cannot emit the input and change event when clicked', () => {
    const wrapper = shallowMount(Slider, {
      propsData: {
        disabled: true
      }
    });
    wrapper.find('.ms-slider__input').trigger('input');
    expect(wrapper.emitted('input')).toBeFalsy();
    wrapper.find('.ms-slider__input').trigger('change');
    expect(wrapper.emitted('change')).toBeFalsy();
  });
});
