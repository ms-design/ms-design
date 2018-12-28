import { shallowMount, mount } from '@vue/test-utils';
import Select from '@/components/select/select.vue';
import SelectTest from './select.vue';

const dataList = new Array(10).fill(0).map((_, index) => ({ label: `option${index}`, value: `${index}` }));

// 默认选择器
describe('default select', () => {
  // 存在且是Vue组件实例
  it('is a vue instance', () => {
    const wrapper = shallowMount(Select);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  // 包含特定类名
  it('contains specific classnames', () => {
    const wrapper = shallowMount(Select);
    expect(wrapper.is('.ms-select')).toBeTruthy();
    expect(wrapper.contains('.ms-select__input')).toBeTruthy();
    expect(wrapper.contains('.ms-select__input__inner')).toBeTruthy();
    expect(wrapper.contains('.ms-select__input__suffix')).toBeTruthy();
    expect(wrapper.contains('.ms-select__dropdown')).toBeTruthy();
    expect(wrapper.contains('.ms-select__dropdown__item')).toBeTruthy();
  });
  // 点击时或聚焦回车时展开下拉菜单
  it('emits the input and change event when dragged', () => {
    const wrapper = mount(SelectTest, {
      attachToDocument: true,
      propsData: {
        dataList
      }
    });
    const selectWrapper = wrapper.find('.ms-select');
    expect(selectWrapper.vm.isExpand).toBeFalsy();
    wrapper.find('.ms-select__input').trigger('click');
    expect(selectWrapper.vm.isExpand).toBeTruthy();
    wrapper.find('.ms-select__input').trigger('click');
    expect(selectWrapper.vm.isExpand).toBeFalsy();
    selectWrapper.trigger('keydown.enter');
    expect(selectWrapper.vm.isExpand).toBeTruthy();
    selectWrapper.trigger('keydown.enter');
    expect(selectWrapper.vm.isExpand).toBeFalsy();
  });
  // 点击外部下拉菜单收起
  it('emits the input and change event when dragged', () => {
    const wrapper = mount(SelectTest, {
      attachToDocument: true,
      propsData: {
        dataList
      }
    });
    const selectWrapper = wrapper.find('.ms-select');
    expect(selectWrapper.vm.isExpand).toBeFalsy();
    wrapper.find('.ms-select__input').trigger('click');
    expect(selectWrapper.vm.isExpand).toBeTruthy();
    wrapper.find({ ref: 'other' }).trigger('click');
    expect(selectWrapper.vm.isExpand).toBeFalsy();
  });
  // 点击展开下拉菜单并选择一项(分别用鼠标和键盘选择)
  it('emits the input and change event when dragged', () => {
    const wrapper = mount(SelectTest, {
      attachToDocument: true,
      propsData: {
        dataList
      }
    });
    const selectWrapper = wrapper.find('.ms-select');
    selectWrapper.find('.ms-select__input').trigger('click');
    selectWrapper.find('.ms-select__dropdown__item').trigger('mousedown');
    selectWrapper.find('.ms-select__input__inner').trigger('blur');
    selectWrapper.find('.ms-select__dropdown__item').trigger('click');
    expect(wrapper.vm.value).toEqual('0');
    expect(selectWrapper.emitted('change')).toBeTruthy();
    expect(selectWrapper.emitted('input')).toBeTruthy();
    // 回车展开
    selectWrapper.trigger('keydown.enter');
    // 三下一上(此时应该停留在值为1的第2项上)
    selectWrapper.trigger('keydown.down');
    selectWrapper.trigger('keydown.down');
    selectWrapper.trigger('keydown.down');
    selectWrapper.trigger('keydown.up');
    selectWrapper.trigger('keydown.enter');
    expect(wrapper.vm.value).toEqual('1');
    selectWrapper.trigger('keydown.enter');
    selectWrapper.trigger('keydown.up');
    selectWrapper.trigger('keydown.enter');
    expect(wrapper.vm.value).toEqual('9');
  });
  // 聚焦时按tab键会失去焦点并收回
  it('emits the input and change event when dragged', () => {
    const wrapper = mount(SelectTest, {
      attachToDocument: true,
      propsData: {
        dataList
      }
    });
    const selectWrapper = wrapper.find('.ms-select');
    const selectInputWrapper = selectWrapper.find('.ms-select__input');
    const selectInputInnerWrapper = selectInputWrapper.find('.ms-select__input__inner');
    selectInputWrapper.trigger('click');
    expect(selectWrapper.vm.isExpand).toBeTruthy();
    // 按tab会触发blur事件
    selectInputInnerWrapper.trigger('blur');
    expect(selectWrapper.vm.isExpand).toBeFalsy();
  });
});

// 禁用状态的开关
describe('disabled select', () => {
  // 有一个为真的disabled属性值
  it('has a truthy property named \'disabled\'', () => {
    const wrapper = mount(SelectTest, {
      propsData: {
        disabled: true
      }
    });
    expect(wrapper.props().disabled).toBeTruthy();
    expect(wrapper.vm.$props.disabled).toBeTruthy();
  });
  // 不能触发input和change事件
  it('cannot emit the input and change event when clicked', () => {
    const wrapper = mount(SelectTest, {
      attachToDocument: true,
      propsData: {
        disabled: true
      }
    });
    const selectWrapper = wrapper.find('.ms-select');
    expect(selectWrapper.vm.isExpand).toBeFalsy();
    wrapper.find('.ms-select__input').trigger('click');
    expect(selectWrapper.vm.isExpand).toBeFalsy();
    selectWrapper.trigger('keydown.enter');
    expect(selectWrapper.vm.isExpand).toBeFalsy();
    selectWrapper.trigger('keydown.down');
    expect(selectWrapper.vm.focusIndex).toEqual(-1);
  });
});
