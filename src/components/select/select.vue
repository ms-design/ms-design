<template>
  <div
    class="ms-select"
    :class="{'ms-select_disabled': disabled}"
    @keydown.enter="handleEnter"
    @keydown.up.prevent="keyboardSelect(-1)"
    @keydown.right.prevent="keyboardSelect(1)"
    @keydown.down.prevent="keyboardSelect(1)"
    @keydown.left.prevent="keyboardSelect(-1)"
    v-click-outside.capture="handleClickOutside"
    v-click-outside:mousedown.capture="handleClickOutside"
  >
    <div class="ms-select__input" @click.stop="switchExpandOrCollapse()">
      <input
        class="ms-select__input__inner"
        type="text"
        autocomplete="off"
        :readonly="true"
        :value="currentLabel"
        @blur="handleInputBlur"
      >
      <Icon
        class="ms-select__input__suffix"
        size="12"
        type="ChevronDown"
        :class="{'expand': isExpand}"
      />
    </div>
    <ul
      class="ms-select__dropdown"
      :style="isExpand ?
        `height: ${Math.max(dataList.length * 32, 32)}px;opacity: 1;` : `height: 0px;opacity: 0;`"
    >
      <li
        v-for="(item, index) in dataList"
        class="ms-select__dropdown__item"
        :key="item.value"
        :class="{'focus': focusIndex === index}"
        @mousedown="handleItemMouseDown"
        @click.stop="handleItemSelect(item)"
      >{{item.label}}</li>
      <li
        v-if="dataList.length === 0"
        class="ms-select__dropdown__item ms-select__dropdown__item_disabled"
      >暂无数据</li>
    </ul>
  </div>
</template>
<script>
import { directive as clickOutside } from 'v-click-outside-x';
import Icon from '../icon';
/**
 * Select
 * @module components/select
 * @desc   下拉选择框
 * @param  {String|Number} value                   - 当前选中项的值, 支持v-model
 * @param  {Array<Object{label, value}>} dataList  - 下拉列表的数据
 * @event  change                                  - 选择列表中数据后触发, 返回当前选中项的完整对象
 * @event  input                                   - 选择列表中数据后触发, 返回选中项的值
 * @example
 * <Select v-model="value" :dataList="{label: 'label', value: 1}"></Select>
 */
export default {
  name: 'Select',
  model: {
    prop: 'value',
    event: 'input'
  },
  directives: {
    clickOutside
  },
  components: {
    Icon
  },
  props: {
    value: {
      type: [Number, String],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    dataList: {
      type: Array,
      default() {
        return [];
      },
      validator(value) {
        return value.every(
          item => typeof item.label === 'string' && (typeof item.value === 'number' || typeof item.value === 'string')
        );
      }
    }
  },
  computed: {
    currentLabel() {
      const currentItem = this.dataList.find(item => item.value === this.value);
      return (currentItem && currentItem.label) || '';
    }
  },
  data() {
    return {
      // 下拉列表是否展开
      isExpand: false,
      // 当前高亮的项
      focusIndex: -1,
      // 不触发blur事件的锁
      noEmitBlur: false
    };
  },
  methods: {
    // 切换下拉列表是否展开
    switchExpandOrCollapse(nextStatus) {
      if (this.disabled) {
        return;
      }
      if (nextStatus === undefined) {
        this.isExpand = !this.isExpand;
      } else {
        this.isExpand = nextStatus;
      }
    },
    // 失去焦点
    handleInputBlur() {
      if (this.noEmitBlur) {
        this.noEmitBlur = false;
      } else if (this.isExpand === true) {
        // Tab键切换焦点时起作用
        this.switchExpandOrCollapse(false);
      }
    },
    // 在选项上鼠标按下给noEmitBlur上锁
    handleItemMouseDown() {
      this.noEmitBlur = true;
    },
    // 当点击或回车选中某个选项
    handleItemSelect(item) {
      this.$emit('input', item.value);
      this.$emit('change', item);
      this.switchExpandOrCollapse(false);
    },
    // 处理外部点击
    handleClickOutside() {
      if (this.isExpand === true) {
        this.switchExpandOrCollapse(false);
      }
    },
    // 处理回车
    handleEnter() {
      if (this.disabled) {
        return;
      }
      if (this.focusIndex === -1) {
        this.switchExpandOrCollapse();
      } else {
        this.handleItemSelect(this.dataList[this.focusIndex]);
        this.focusIndex = -1;
      }
    },
    // 键盘上下选择
    keyboardSelect(delta) {
      if (this.dataList.length === 0 || this.disabled) {
        return;
      }
      if (delta === 1) {
        this.focusIndex = (this.focusIndex + 1) % this.dataList.length;
      } else if (this.focusIndex === -1) {
        this.focusIndex = this.dataList.length - 1;
      } else {
        this.focusIndex = (this.focusIndex - 1 + this.dataList.length) % this.dataList.length;
      }
    }
  }
};
</script>
<style lang="less">
@import '~@/assets/styles/variable.less';

.ms-select {
  width: 300px;
  height: 32px;
  display: inline-block;
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
  &__input {
    width: 100%;
    height: 100%;
    position: relative;
    &__inner {
      padding-right: 30px;
      cursor: pointer;
      -webkit-appearance: none;
      background-color: #fff;
      border: 1px solid rgb(166, 166, 166);
      font-size: 14px;
      color: rgb(102, 102, 102);
      display: inline-block;
      height: 32px;
      line-height: 32px;
      outline: none;
      -moz-user-select: -moz-none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
      padding: 0 15px;
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      width: 100%;
      &:hover, &:focus {
        border-color: @primary-color;
        user-select: none;
      }
    }
    &__suffix {
      position: absolute;
      height: 100%;
      right: 12px;
      top: 0;
      line-height: 32px;
      transition: all 0.3s;
      &.expand {
        transform: rotate(180deg);
      }
    }
  }
  &__dropdown {
    position: absolute;
    width: 100%;
    padding: 0;
    list-style-type: none;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px 0px;
    -webkit-font-smoothing: antialiased;
    outline: transparent;
    border: 1px solid rgb(234, 234, 234);
    background-color: #fff;
    border-top: none;
    border-bottom: none;
    transition: height 0.3s, opacity 0.3s;
    overflow: hidden;
    &__item {
      padding: 4px 16px;
      box-sizing: border-box;
      min-height: 32px;
      line-height: 24px;
      overflow-wrap: break-word;
      outline: transparent;
      color: rgb(51, 51, 51);
      font-size: 14px;
      user-select: none;
      &.focus,
      &:hover:not(&_disabled) {
        color: @primary-color;
        background-color: rgb(240, 240, 240);
      }
      &_disabled {
        text-align: center;
        color: #a6a6a6;
        cursor: not-allowed;
      }
    }
  }
  &_disabled {
    cursor: not-allowed;
    .ms-select__input__inner {
      background-color: #f3f3f3;
      border-color: #f8f8f8;
      &:hover {
        border-color: #f8f8f8;
        cursor: not-allowed;
      }
    }
  }
}
</style>
