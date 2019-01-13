<template>
  <!-- eslint-disable vue/no-v-html -->
  <span
    class="ms-icon"
    :style="style"
    @click="handleClick"
    v-html="iconContent"
  />
  <!-- eslint-enable -->
</template>
<script>
import iconList from './iconList';

const hexColorReg = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
const rgbColorReg = /^[rR][gG][Bb]\s*\(\s*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)\s*,\s*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)\s*,\s*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)\s*\)\s*$/;

/**
 * Icon
 * @module components/icon
 * @desc 图标
 * @param {Number|String} [size=24] - 图标大小
 * @param {String} - 图标颜色
 * @example
 * <Icon />
 */
export default {
  name: 'Icon',
  props: {
    type: {
      type: String,
      default: ''
    },
    // 最小12px, 最大48px
    size: {
      type: [Number, String],
      default: 24,
      validator(value) {
        const newValue = +value;
        return Number.isInteger(+newValue) && newValue >= 12 && newValue <= 48;
      }
    },
    // 必须是十六进制或rgb颜色字符串
    color: {
      type: String,
      default: '#000',
      validator(value) {
        return hexColorReg.test(value) || rgbColorReg.test(value);
      }
    }
  },
  computed: {
    iconContent() {
      return iconList[this.type] || this.type;
    },
    style() {
      return {
        fontSize: `${Number.parseInt(this.size, 10)}px`,
        color: `${this.color}`
      };
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
.ms-icon {
  font-family: Segoe MDL2 Assets;
  display: inline-block;
}
</style>
