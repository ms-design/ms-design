<template>
  <div class="ms-slider">
    <div
      v-if="!isIE"
      :class="progressClasses"
      :style="progressStyle"
    />
    <input
      type="range"
      :class="inputClasses"
      :disabled="disabled"
      :min="min"
      :max="max"
      :value="value"
      @input="handleInput"
      @change="handleChange"
    >
  </div>
</template>
<script>
/**
 * Slider
 * @module components/slider
 * @desc   滑动条
 * @param  {String|Number} value     - 当前滑块所在刻度, 支持v-model
 * @param  {Boolean}       disabled  - 是否禁用
 * @param  {String|Number} step      - 步长
 * @param  {String|Number} min       - 最小值
 * @param  {String|Number} max       - 最大值
 * @example
 * <Slider v-model="value"></Slider>
 */

const prefixClass = 'ms-slider';

export default {
  name: 'Slider',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: [Number, String],
      default: 0,
      validator(value) {
        return /^\d+(\.\d+)?$/.test(`${value}`);
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    step: {
      type: [Number, String],
      default: 1,
      validator(value) {
        return /^\d+(\.\d+)?$/.test(`${value}`);
      }
    },
    min: {
      type: [Number, String],
      default: 0,
      validator(value) {
        return /^\d+(\.\d+)?$/.test(`${value}`);
      }
    },
    max: {
      type: [Number, String],
      default: 100,
      validator(value) {
        return /^\d+(\.\d+)?$/.test(`${value}`);
      }
    }
  },
  computed: {
    isIE() {
      return (
        !!window.ActiveXObject
        || 'ActiveXObject' in window
        || navigator.userAgent.indexOf('Edge') > -1
      );
    },
    progressStyle() {
      const { value, max, min } = this;
      return {
        width: `${((value - min) * 100) / (max - min)}%`
      };
    },
    progressClasses() {
      const basicClass = `${prefixClass}__progress`;
      return [
        basicClass,
        {
          [`${basicClass}_disabled`]: this.disabled
        }
      ];
    },
    inputClasses() {
      const basicClass = `${prefixClass}__input`;
      return [
        basicClass,
        {
          [`${basicClass}_disabled`]: this.disabled
        }
      ];
    }
  },
  methods: {
    handleInput(event) {
      this.$emit('input', +event.target.value);
    },
    handleChange(event) {
      this.$emit('change', +event.target.value);
    }
  }
};
</script>
<style lang="less">
@import '~@/assets/styles/variable.less';

.thumb-common-style() {
  position: relative;
  z-index: 3;
  width: 8px;
  height: 24px;
  border-radius: 4px;
  transform: translateY(-5px);
  background-color: @primary-color;
  cursor: grab;
  transition: all 0.25s;
  &:active {
    cursor: grabbing;
  }
}

.track-common-style() {
  width: 100%;
  height: 2px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 1px;
  cursor: pointer;
}

.ms-slider {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 24px;
  &__progress {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto auto;
    border-radius: 1px;
    height: 2px;
    background-color: @primary-color;
    z-index: 1;
    &_disabled {
      background-color: #c4c4c4;
      cursor: not-allowed;
    }
  }
  &__input {
    position: relative;
    margin: 0 0;
    padding: 0 0;
    width: 100%;
    height: 100%;
    overflow: visible;
    -webkit-appearance: none;
    &:active {
      cursor: grabbing;
    }
    &:focus {
      outline: none;
    }
    &::-webkit-slider-thumb {
      .thumb-common-style();
      margin-top: -6px;
      -webkit-appearance: none;
    }
    &::-moz-range-thumb {
      .thumb-common-style();
      transform: translateZ(1px);
    }
    &::-ms-thumb {
      .thumb-common-style();
      // IE下的thumb偏移量需要重新计算
      transform: translateY(3px);
    }
    &::-webkit-slider-runnable-track {
      .track-common-style();
    }
    &::-moz-range-track {
      .track-common-style();
    }
    &::-ms-track {
      // IE下的track样式与其他浏览器不一样, 不能使用track-common-style
      width: 100%;
      height: 2px;
      cursor: pointer;
      border-radius: 1px;
      color: transparent;
    }
    &::-ms-fill-lower {
      background: @primary-color;
      border-radius: 3px;
    }
    &::-ms-fill-upper {
      background: #c4c4c4;
      border-radius: 3px;
    }
    &_disabled {
      cursor: not-allowed;
      background-color: transparent;
      &::-webkit-slider-thumb {
        background-color: #c4c4c4;
        cursor: not-allowed;
      }
      &::-moz-range-thumb {
        background-color: #c4c4c4;
        cursor: not-allowed;
      }
      &::-ms-thumb {
        background-color: #c4c4c4;
        cursor: not-allowed;
      }
      &::-webkit-slider-runnable-track {
        cursor: not-allowed;
      }
      &::-moz-range-track {
        cursor: not-allowed;
      }
      &::-ms-track {
        cursor: not-allowed;
      }
      &::-ms-fill-lower {
        // IE下，disabled状态时track左边颜色不是灰色, 需要手动置灰
        background: #c4c4c4;
      }
    }
  }
}
</style>
