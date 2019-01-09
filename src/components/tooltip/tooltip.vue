<template>
  <div
    class="ms-tooltip"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
  >
    <div
      :class="popoverClasses"
      :ms-placement="placement"
      :style="style"
    >
      {{ content }}
      <slot name="content" />
    </div>
    <slot />
  </div>
</template>
<script>
// 提示框出现的位置, 共八种
const PLACEMENTS = ['top-left', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left'];
/**
 * Tooltip
 * @module components/tooltip
 * @desc   文字提示
 * @param  {String}        content     - 提示内容
 * @param  {Boolean}       disabled    - 是否禁用
 * @param  {String}        placement   - 提示框出现的位置
 * @param  {String|Number} delay       - 显示延迟
 * @param  {String|Number} offset      - 位置偏移量
 * @param  {Boolean}       transition  - 提示框出现时是否显示渐变动画
 * @event  show  提示框显示时触发
 * @event  hide  提示框消失时触发
 * @example
 * <Tooltip content="tips"></Tooltip>
 */
export default {
  name: 'Tooltip',
  props: {
    content: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    delay: {
      type: [Number, String],
      default: 0,
      validator(value) {
        // 必须是非负整数
        const msValue = Number.parseInt(value, 10);
        return Number.isSafeInteger(msValue) && msValue >= 0;
      }
    },
    offset: {
      type: [Number, String],
      default: 0,
      validator(value) {
        // 必须是非负整数
        const msValue = Number.parseInt(value, 10);
        return Number.isSafeInteger(msValue) && msValue >= 0;
      }
    },
    placement: {
      type: String,
      default: 'top',
      validator(value) {
        // 必须是预设的八种位置之一
        return PLACEMENTS.includes(value);
      }
    },
    transition: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      // 当前是否显示提示框
      isShowTooltip: false,
      // 鼠标当前是否hover
      isMouseHover: false
    };
  },
  computed: {
    // 提示框偏移样式
    offsetStyle() {
      if (!this.isShowTooltip) {
        return '';
      }
      const msOffset = Number.parseInt(this.offset, 10);
      switch (this.placement) {
      case 'top':
        return `transform: translate(-50%, -${msOffset}px)`;
      case 'bottom':
        return `transform: translate(-50%, ${msOffset}px)`;
      case 'left':
        return `transform: translate(-${msOffset}px, -50%)`;
      case 'right':
        return `transform: translate(${msOffset}px, -50%)`;
      case 'top-left':
        return `transform: translate(calc(-100% - ${msOffset}px), calc(-100% - ${msOffset}px))`;
      case 'top-right':
        return `transform: translate(calc(100% + ${msOffset}px), calc(-100% - ${msOffset}px)`;
      case 'bottom-left':
        return `transform: translate(calc(-100% - ${msOffset}px), calc(100% + ${msOffset}px))`;
      case 'bottom-right':
        return `transform: translate(calc(100% + ${msOffset}px), calc(100% + ${msOffset}px))`;
      default:
        return `transform: translate(-50%, -${msOffset}px)`;
      }
    },
    // 提示框渐变动画样式
    transitionStyle() {
      return this.transition ? 'transition: all .25s ease-in-out' : '';
    },
    style() {
      return `${this.offsetStyle};${this.transitionStyle}`;
    },
    popoverClasses() {
      return {
        'ms-tooltip__popover': true,
        'ms-tooltip__popover_disabled': this.disabled,
        'ms-tooltip__popover_active': this.isShowTooltip && !this.disabled
      };
    }
  },
  methods: {
    // 显示提示框
    showTooltip() {
      this.isMouseHover = true;
      // 清除可能存在定时器
      clearTimeout(this.timeoutID);
      if (!this.disabled) {
        this.timeoutID = setTimeout(() => {
          // 只有当鼠标hover时, 延迟显示才有效
          if (this.isMouseHover) {
            this.isShowTooltip = true;
            this.$emit('show');
          }
        }, this.delay);
      }
    },
    // 隐藏提示框
    hideTooltip() {
      this.isMouseHover = false;
      if (!this.disabled && this.isShowTooltip) {
        this.isShowTooltip = false;
        this.$emit('hide');
      }
    }
  }
};
</script>
<style lang="less">
.ms-tooltip {
  display: inline-block;
  position: relative;
  &__popover {
    font-family: SegoeUI;
    font-size: 12px;
    color: #000000;
    line-height: 14px;
    text-align: center;
    border: 1px solid #ccc;
    background: #f2f2f2;
    height: 28px;
    padding: 5px 8px;
    opacity: 0;
    position: absolute;
    z-index: 100;
    visibility: hidden;
    pointer-events: none;
    &[ms-placement="top-left"] {
      top: 0;
      right: auto;
      bottom: auto;
      left: 0;
      transform: translate(-100%, -100%);
    }
    &[ms-placement="top"] {
      top: auto;
      right: auto;
      bottom: 100%;
      left: 50%;
      transform: translate(-50%, 0);
    }
    &[ms-placement="top-right"] {
      top: 0;
      right: 0;
      bottom: auto;
      left: auto;
      transform: translate(100%, -100%);
    }
    &[ms-placement="right"] {
      top: 50%;
      right: auto;
      bottom: auto;
      left: 100%;
      transform: translate(0, -50%);
    }
    &[ms-placement="bottom-right"] {
      top: auto;
      right: 0;
      bottom: 0;
      left: auto;
      transform: translate(100%, 100%);
    }
    &[ms-placement="bottom"] {
      top: 100%;
      right: auto;
      bottom: auto;
      left: 50%;
      transform: translate(-50%, 0);
    }
    &[ms-placement="bottom-left"] {
      top: auto;
      right: auto;
      bottom: 0;
      left: 0;
      transform: translate(-100%, 100%);
    }
    &[ms-placement="left"] {
      top: 50%;
      right: 100%;
      bottom: auto;
      left: auto;
      transform: translate(0, -50%);
    }
    &_active:not(&_disabled) {
      opacity: 1;
      visibility: visible;
      pointer-events: all;
    }
  }
}
</style>
