<template>
  <input
    class="ms-input"
    :type="type"
    :disabled="disabled"
    :placeholder="placeholder"
    @input="handleInput"
    @focus="handleFocus"
    @blur="handleBlur"
  >
</template>
<script>
/**
 * Input
 * @module components/input
 * @desc   输入框
 * @param  {String}  type      - 显示类型, 只接受 text, password
 * @param  {Boolean} disabled  - 是否禁用
 *
 * @example
 * <Input />
 */
export default {
  name: 'Input',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return ['text', 'password'].includes(value);
      }
    },
    value: {
      type: String,
      default: ''
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value);
    },
    handleFocus() {
      this.$emit('focus');
    },
    handleBlur() {
      this.$emit('blur');
    }
  }
};
</script>
<style lang="less">
@import '~@/assets/styles/variable.less';

.ms-input {
  line-height: 32px;
  height: 32px;
  width: 296px;
  padding: 0 8px;
  font-size: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #000;
  background: none;
  box-shadow: inset 0px 0px 0 1px rgba(0, 0, 0, 0.5);
  border: none;
  transition: all 0.25s;
  outline: none;
  &:hover:not(:disabled) {
    box-shadow: inset 0px 0px 0 1px @primary-color;
  }
  &:focus {
    box-shadow: inset 0px 0px 0 1px @primary-color;
  }
  &:disabled {
    box-shadow: inset 0px 0px 0 1px rgba(0, 0, 0, 0.2);
    cursor: not-allowed;
  }
  @media screen and (max-width: 419px) {
    width: 100%;
  }
}
</style>
