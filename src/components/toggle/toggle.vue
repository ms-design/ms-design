<template>
  <label class="ms-toggle" @click.prevent="handleClick">
    <span class="ms-toggle__button" :class="statusClass"></span>
  </label>
</template>
<script>
/**
 * Toggle
 * @module components/toggle
 * @desc   开关
 * @param  {Boolean} checked   - 显示打开(支持v-model)
 * @param  {Boolean} disabled  - 是否禁用
 *
 * @example
 * <Toggle />
 */
export default {
  name: 'Toggle',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  computed: {
    statusClass() {
      return {
        checked: this.checked,
        disabled: this.disabled
      };
    }
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.$emit('change', !this.checked);
      }
    }
  }
};
</script>
<style lang="less">
@import '~@/assets/styles/variable.less';

.ms-toggle {
  display: inline-flex;
  align-items: center;
  position: relative;
}
.ms-toggle__button {
  background: transparent;
  border: 2px solid #333;
  border-radius: 10px;
  box-sizing: border-box;
  width: 44px;
  height: 20px;
  position: relative;
  display: block;
  flex: 0 0 auto;
  transition: background-color 0.5s, border-color 0.5s;
  cursor: pointer;
  &::after {
    content: '';
    width: 12px;
    height: 12px;
    position: absolute;
    top: 2px;
    left: 3px;
    background-color: #333;
    border-radius: 50%;
    transition: background-color 0.5s, left 0.5s;
  }
  &.checked {
    background-color: @primary-color;
    border-color: @primary-color;
    &::after {
      background-color: #fff;
      left: 27px;
    }
  }
  &.disabled {
    background-color: #ccc;
    border-color: #ccc;
    cursor: not-allowed;
    &::after {
      background-color: #a3a3a3;
    }
  }
}
</style>
