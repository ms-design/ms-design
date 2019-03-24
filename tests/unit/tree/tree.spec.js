import { mount } from '@vue/test-utils';
import TreeDefault from './tree-default.vue';
import TreeCheckbox from './tree-checkbox.vue';

// 默认单选框组合
describe('default tree', () => {
  // 存在且是Vue组件实例
  it('is a vue instance', () => {
    const wrapper = mount(TreeDefault);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  // 包含特定类名
  it('contains specific classnames', () => {
    const wrapper = mount(TreeCheckbox);
    expect(wrapper.is('.ms-tree')).toBeTruthy();
    expect(wrapper.contains('.ms-treenode_level1')).toBeTruthy();
    expect(wrapper.contains('.ms-treenode_level2')).toBeTruthy();
    expect(wrapper.contains('.ms-treenode_level3')).toBeTruthy();
    expect(wrapper.contains('.ms-checkbox')).toBeTruthy();
    expect(wrapper.contains('.ms-icon')).toBeTruthy();
  });

  // 点击选框
  it('checkbox is clicked', () => {
    const wrapper = mount(TreeCheckbox);
    const checkboxWrappers = wrapper.findAll('.ms-treenode_level2__item .ms-checkbox-container');
    const checkbox = checkboxWrappers.at(0);
    expect(wrapper.vm.isChange).toBe(false);
    checkbox.trigger('click');
    expect(wrapper.vm.isChange).toBe(true);
    expect(wrapper.vm.select).toEqual([3, 7, 8, 4, 1, 9, 10]);
    checkbox.trigger('click');
    expect(wrapper.vm.select).toEqual([3, 7, 8]);
  });
});
