<template>
  <button
    :class="classes"
    :disabled="internalDisabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
<script>
/**
 * Button
 * @module components/button
 * @desc   按钮
 * @param  {String}  type      - 显示类型, 只接受 default, primary, disabled
 * @param  {Boolean} disabled  - 是否禁用
 * @param  {String}  size      - 按钮大小, 只接受 small, large
 *
 * @example
 * <Button type="primary"></Button>
 */

const prefixCls = 'ms-button';

export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'primary', 'disabled'].includes(value);
      }
    },
    size: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'small', 'large'].includes(value);
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    internalDisabled() {
      return this.disabled || this.type === 'disabled';
    },
    classes() {
      return [
        prefixCls,
        {
          [`${prefixCls}_type-default`]: !this.internalDisabled && this.type === 'default',
          [`${prefixCls}_type-primary`]: !this.internalDisabled && this.type === 'primary',
          [`${prefixCls}_type-disabled`]: this.internalDisabled,
          [`${prefixCls}_size-${this.size}`]: !!this.size
        }
      ];
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
};
</script>
<style lang="less">
@import '~@/assets/styles/variable.less';

.ms-button {
  font-size: 14px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  vertical-align: top;
  user-select: none;
  outline: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-image: initial;
  text-decoration: none;
  border-radius: 0px;
  transition: background-color 0.2s;
  &_type {
    &-default {
      background-color: @default-color;
      color: rgb(51, 51, 51);
      &:hover {
        background-color: @default-hover-color;
      }
    }
    &-primary {
      color: #fff;
      background-color: @primary-color;
      &:hover {
        background-color: @primary-hover-color;
      }
    }
    &-disabled {
      cursor: not-allowed;
      background-color: @default-color;
      color: rgb(166, 166, 166);
    }
  }
  &_size {
    &-default {
      min-width: 80px;
      height: 32px;
      padding: 0 18px;
    }
    &-small {
      min-width: 40px;
      font-size: 12px;
      height: 28px;
      padding: 0 10px;
    }
    &-large {
      min-width: 120px;
      font-size: 16px;
      height: 48px;
      padding: 0 24px;
    }
  }
}
</style>
