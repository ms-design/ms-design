import { mount } from '@vue/test-utils';
import TreeDefault from './tree-default.vue';
// import TreeCheckbox from './tree-checkbox.vue';

// 默认单选框组合
describe('default tree', () => {
  // 存在且是Vue组件实例
  it('is a vue instance', () => {
    const wrapper = mount(TreeDefault);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  //   // 包含特定类名
  //   it('contains specific classnames', () => {
  //     const wrapper = mount(RadioDefault);
  //     expect(wrapper.is('.ms-radio-group')).toBeTruthy();
  //     expect(wrapper.contains('.ms-radio')).toBeTruthy();
  //     expect(wrapper.contains('.ms-radio__icon')).toBeTruthy();
  //     expect(wrapper.contains('.ms-radio__icon_inner')).toBeTruthy();
  //     expect(wrapper.contains('.ms-radio__text')).toBeTruthy();
  //   });
  //   it('has a correct label', () => {
  //     const wrapper = mount(RadioDefault);
  //     const radioWrappers = wrapper.findAll('.ms-radio');
  //     for (let i = 0; i < radioWrappers.length; i += 1) {
  //       expect(radioWrappers.at(i).find('.ms-radio__text').text()).toEqual(`label${i + 1}`);
  //     }
  //   });
  //   // 被点击时会触发change事件
  //   it('emits the change event when clicked', () => {
  //     const wrapper = mount(RadioDefault);
  //     const radioWrappers = wrapper.findAll('.ms-radio');
  //     const handleFunction = jest.fn();
  //     wrapper.setMethods({ handleChange: handleFunction });
  //     for (let i = 0; i < radioWrappers.length; i += 1) {
  //       radioWrappers.at(i).trigger('click');
  //       radioWrappers.at(i).trigger('click');
  //       expect(handleFunction).toHaveBeenCalledWith(`label${i + 1}`);
  //       expect(handleFunction).toBeCalledTimes(i + 1);
  //     }
  //   });
  // });

// // 存在不可选选项的单选框组合
// describe('disabled radio', () => {
//   // 有一个为真的disabled属性值
//   it('has a truthy property named \'disabled\'', () => {
//     const wrapper = mount(RadioDisabled);
//     const radioWrappers = wrapper.findAll('.ms-radio');
//     for (let i = 0; i < radioWrappers.length; i += 1) {
//       expect(radioWrappers.at(i).props().disabled).toBeTruthy();
//       expect(radioWrappers.at(i).vm.$props.disabled).toBeTruthy();
//     }
//   });
//   // 不能触发change事件
//   it('cannot emit the change event when clicked', () => {
//     const wrapper = mount(RadioDisabled);
//     const radioWrappers = wrapper.findAll('.ms-radio');
//     const handleFunction = jest.fn();
//     wrapper.setMethods({ handleChange: handleFunction });
//     for (let i = 0; i < radioWrappers.length; i += 1) {
//       radioWrappers.at(i).trigger('click');
//       expect(handleFunction).toBeCalledTimes(0);
//     }
//   });
});
