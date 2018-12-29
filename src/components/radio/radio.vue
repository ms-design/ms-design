<template>
  <div class="ms-radio" :class="statusClass" @click="handleClick">
    <div class="ms-radio__icon" :class="statusClass">
      <span class="ms-radio__icon_inner" :class="statusClass"></span>
    </div>
    <span class="ms-radio__text">
      <slot></slot>
    </span>
  </div>
</template>
<script>
/**
 * Radio
 * @module components/radio
 * @desc   单选框
 * @param  {String|Number} value     - 被选中时的值
 * @param  {Boolean}       disabled  - 是否禁用
 *
 * @example
 * <Radio value="123">label1</Radio>
 */
export default {
  name: 'Radio',
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    checked() {
      return this.value === this.$parent.value;
    },
    statusClass() {
      return {
        checked: this.checked,
        disabled: this.disabled
      };
    }
  },
  methods: {
    handleClick() {
      if (!this.disabled && !this.checked) {
        this.$parent.changeValue(this.value);
      }
    }
  }
};
</script>
<style lang="less">
@import '~@/assets/styles/variable.less';

.ms-radio {
  display: inline-block;
  font-size: 0;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  &.disabled {
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.2);
  }
}
.ms-radio__icon {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  overflow: hidden;
  transition: all 0.3s;
  &.checked:not(.disabled) {
    border-color: @primary-color;
  }
  &.disabled {
    border-color: rgba(0, 0, 0, 0.2);
  }
}
.ms-radio__icon_inner {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.8);
  transform: scale(0);
  opacity: 0;
  transition: all 0.3s;
  &.checked {
    transform: scale(0.8);
    opacity: 1;
  }
  &.disabled {
    background-color: rgba(0, 0, 0, 0.2);
  }
}
.ms-radio__text {
  margin-left: 8px;
  font-size: 16px;
}
</style>
