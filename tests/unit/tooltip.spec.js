import { shallowMount } from '@vue/test-utils';
import Tooltip from '@/components/tooltip/tooltip.vue';

// 默认文字提示
describe('default tooltip', () => {
  // 存在且是Vue组件实例
  it('is a vue instance', () => {
    const wrapper = shallowMount(Tooltip);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  // 包含特定类名
  it('contains specific classnames', () => {
    const wrapper = shallowMount(Tooltip);
    expect(wrapper.is('.ms-tooltip')).toBeTruthy();
    expect(wrapper.contains('.ms-tooltip__popover')).toBeTruthy();
  });
  // 鼠标放上去会触发show事件
  it('emits the show event when mouseentering', done => {
    const wrapper = shallowMount(Tooltip);
    wrapper.trigger('mouseenter');
    setTimeout(() => {
      expect(wrapper.emitted('show')).toBeTruthy();
      done();
    }, 0);
  });
  // 鼠标离开会触发hide事件
  it('emits the hide event when mouseleaving', () => {
    const wrapper = shallowMount(Tooltip);
    wrapper.trigger('mouseleave');
    expect(wrapper.emitted('hide')).toBeTruthy();
  });
});

// 禁用状态的开关
describe('disabled tooltip', () => {
  // 有一个为真的disabled属性值
  it('has a truthy property named \'disabled\'', () => {
    const wrapper = shallowMount(Tooltip, {
      propsData: {
        disabled: true
      }
    });
    expect(wrapper.props().disabled).toBeTruthy();
    expect(wrapper.vm.$props.disabled).toBeTruthy();
  });
  // 不能触发show事件
  it('cannot emit the change event when mouseentering', done => {
    const wrapper = shallowMount(Tooltip, {
      propsData: {
        disabled: true
      }
    });
    wrapper.trigger('mouseenter');
    setTimeout(() => {
      expect(wrapper.emitted('show')).toBeFalsy();
      done();
    }, 0);
  });
});

// 不同placement属性的文字提示
describe('tooltip with different placement', () => {
  const PLACEMENTS = ['top-left', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left'];
  function getTransformStyle(placement, offset) {
    switch (placement) {
    case 'top':
      return `translate(-50%, -${offset}px)`;
    case 'bottom':
      return `translate(-50%, ${offset}px)`;
    case 'left':
      return `translate(-${offset}px, -50%)`;
    case 'right':
      return `translate(${offset}px, -50%)`;
    case 'top-left':
      return `translate(calc(-100% - ${offset}px), calc(-100% - ${offset}px))`;
    case 'top-right':
      return `translate(calc(100% + ${offset}px), calc(-100% - ${offset}px)`;
    case 'bottom-left':
      return `translate(calc(-100% - ${offset}px), calc(100% + ${offset}px))`;
    case 'bottom-right':
      return `translate(calc(100% + ${offset}px), calc(100% + ${offset}px))`;
    default:
      return `translate(-50%, -${offset}px)`;
    }
  }
  PLACEMENTS.forEach((placement, index) => {
    const offset = index + 1;
    it(`placement ${placement}`, done => {
      const wrapper = shallowMount(Tooltip, {
        attachToDocument: true,
        propsData: { placement, offset }
      });
      wrapper.trigger('mouseenter');
      setTimeout(() => {
        expect(wrapper.find('.ms-tooltip__popover').element.style.transform).toEqual(getTransformStyle(placement, offset));
        done();
      }, 0);
    });
  });
});

// 带渐变动画的文字提示
describe('tooltip with transition', () => {
  // 渐变动画开启
  it('transition true', done => {
    const wrapper = shallowMount(Tooltip, {
      propsData: {
        transition: true,
        content: 'tips...'
      }
    });
    wrapper.trigger('mouseenter');
    setTimeout(() => {
      expect(wrapper.vm.transitionStyle).toEqual('transition: all .25s ease-in-out');
      done();
    }, 0);
  });
  // 渐变动画关闭
  it('transition false', done => {
    const wrapper = shallowMount(Tooltip, {
      propsData: {
        transition: false,
        content: 'tips...'
      }
    });
    wrapper.trigger('mouseenter');
    setTimeout(() => {
      expect(wrapper.vm.transitionStyle).toEqual('');
      done();
    }, 0);
  });
});
