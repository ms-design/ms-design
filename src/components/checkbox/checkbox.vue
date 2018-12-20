<template>
  <div class="ms-checkbox-container" :class="statusClass" @click="handleClick">
    <div class="ms-checkbox" :class="statusClass">
      <span
        class="ms-checkbox__icon"
        :class="statusClass"
        v-html="checked === 2 ? '' : '\uE001'"
      ></span>
    </div>
    <div class="ms-checkbox__slot">
      <slot></slot>
    </div>
  </div>
</template>
<script>
/**
 * Checkbox
 * @module components/checkbox
 * @desc   复选框
 * @param  {Boolean} disabled  - 是否禁用
 * @param  {Number}  checked   - 是否选中, 只接受整型值(0:未选中, 1:选中, 2:不确定)
 *
 * @example
 * <Checbox></Checbox>
 */
export default {
  name: 'Checkbox',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Number,
      default: 0,
      validator(value) {
        return [0, 1, 2].includes(value);
      }
    }
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  computed: {
    statusClass() {
      return {
        checked: this.checked === 1,
        disabled: this.disabled,
        unsure: this.checked === 2
      };
    }
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        const newChecked = Number(!this.checked);
        this.$emit('change', newChecked);
      }
    }
  }
};
</script>
<style lang="less">
@import '~@/assets/styles/variable.less';
@import '~@/assets/styles/icon.less';

.ms-checkbox-container {
  display: inline-block;
  cursor: pointer;
  &.disabled {
    cursor: not-allowed;
  }
}
.ms-checkbox {
  display: flex;
  user-select: none;
  font-family: Segoe MDL2 Assets;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(102, 102, 102);
  width: 20px;
  height: 20px;
  background: none;
  overflow: hidden;
  float: left;
  &.checked {
    background: @primary-color;
    border-color: @primary-color;
    &.disabled {
      background: rgb(200, 200, 200);
      border-color: rgb(200, 200, 200);
    }
  }
  &.disabled {
    border-color: rgb(200, 200, 200);
    background: none;
  }
  &.unsure {
    background: none;
  }
}
.ms-checkbox__icon {
  display: inline-block;
  transition: transform 0.25s;
  text-align: center;
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: all 0.25s;
  border: none;
  outline: none;
  user-select: none;
  width: 20px;
  height: 20px;
  line-height: inherit;
  font-size: 18px;
  color: #fff;
  flex: 0 0 auto;
  padding: 0px;
  margin: 0px;
  transform: scale(0);
  background: @primary-color;
  &.checked {
    transform: scale(1);
    &.disabled {
      transform: scale(1);
      color: rgb(244, 244, 244);
      background: rgb(200, 200, 200);
    }
  }
  &.disabled {
    transform: scale(0);
  }
  &.unsure {
    transform: scale(0.6125);
    background: @primary-color;
    &.disabled {
      background: rgb(200, 200, 200);
    }
  }
}
.ms-checkbox__slot {
  margin-left: 10px;
  line-height: 22px;
  font-size: 14px;
  float: left;
  user-select: none;
  &::after {
    content: '';
    clear: both;
  }
}
</style>
