import { shallowMount } from '@vue/test-utils';
import Icon from '@/components/icon/icon.vue';
import iconList from '@/components/icon/iconList';

// 默认图标
describe('default icon', () => {
  // 存在且是Vue组件实例
  it('is a vue instance', () => {
    const wrapper = shallowMount(Icon);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  // 包含特定类名
  it('contains specific classnames', () => {
    const wrapper = shallowMount(Icon);
    const classes = wrapper.classes();
    expect(classes).toContain('ms-icon');
  });
  // 被点击时会触发click事件
  it('emits custom event when clicked', () => {
    const wrapper = shallowMount(Icon);
    wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });
});

// 正常图标(内嵌icon的key或value)
describe('normal icon having a slot', () => {
  const iconKeyList = Object.keys(iconList);
  const randomIconKey = iconKeyList[Math.floor(Math.random() * iconKeyList.length)];
  // 传递图标的key
  it('renders icon when passed icon\'s key', () => {
    const wrapper = shallowMount(Icon, {
      slots: {
        default: randomIconKey
      }
    });
    expect(wrapper.text()).toEqual(iconList[randomIconKey]);
  });
  // 传递图标的value
  it('renders icon when passed icon\'s value', () => {
    const wrapper = shallowMount(Icon, {
      slots: {
        default: iconList[randomIconKey]
      }
    });
    expect(wrapper.text()).toEqual(iconList[randomIconKey]);
  });
});

// 彩色的icon
describe('colorized icon', () => {
  const rgbColor = 'rgb(0, 162, 255)';
  const hexColor = '#00a2ff';
  // rgb颜色值正确
  it('has correct rgb color', () => {
    const wrapper = shallowMount(Icon, {
      propsData: {
        color: rgbColor
      }
    });
    expect(wrapper.element.style.color).toEqual(rgbColor);
  });
  // hex颜色值正确(hex颜色值会被DOM自动转为rgb值)
  it('has correct hex color', () => {
    const wrapper = shallowMount(Icon, {
      propsData: {
        color: hexColor
      }
    });
    expect(wrapper.element.style.color).toEqual(rgbColor);
  });
});
