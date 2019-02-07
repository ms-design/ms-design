<template>
  <div
    class="ms-progress-bar"
    :class="statusClass"
  >
    <template v-if="isIndeterminate">
      <div class="ms-progress-bar__dot" />
      <div class="ms-progress-bar__dot" />
      <div class="ms-progress-bar__dot" />
      <div class="ms-progress-bar__dot" />
      <div class="ms-progress-bar__dot" />
    </template>
    <template v-else>
      <div
        class="ms-progress-bar__inner"
        :style="innerWidthStyle"
      />
    </template>
  </div>
</template>
<script>
/**
 * ProgressBar
 * @module components/progressBar
 * @desc   进度条
 * @param  {Boolean}  isIndeterminate   - 进度是否不确定
 * @param  {Number}   percent           - 进度值
 *
 * @example
 * <ProgressBar />
 */
export default {
  name: 'ProgressBar',
  props: {
    isIndeterminate: {
      type: Boolean,
      default: false
    },
    percent: {
      type: [Number],
      default: 0,
      validator: value => value >= 0 && value <= 1
    }
  },
  computed: {
    statusClass() {
      return {
        'ms-progress-bar_indeterminate': this.isIndeterminate
      };
    },
    innerWidthStyle() {
      return `width:${this.percent * 100}%`;
    }
  }
};
</script>
<style lang="less">
@import '~@/assets/styles/variable.less';

.ms-progress-bar {
  position: relative;
  width: 350px;
  height: 5px;
  line-height: 1;
  background: @default-color;
  overflow: hidden;
  &_indeterminate {
    background: none;
  }
  &__inner {
    height: 100%;
    width: 0%;
    background: @primary-color;
  }
  &__dot {
    position: absolute;
    height: 5px;
    width: 5px;
    z-index: 100;
    border-radius: 50%;
    opacity: 0;
    background: @primary-color;
    animation: pbid 4000ms infinite;
  }

  & > &__dot:nth-child(1) {
    animation-delay: 0ms;
  }

  & > &__dot:nth-child(2) {
    animation-delay: 240ms;
  }

  & > &__dot:nth-child(3) {
    animation-delay: 480ms;
  }

  & > &__dot:nth-child(4) {
    animation-delay: 720ms;
  }

  & > &__dot:nth-child(5) {
    animation-delay: 960ms;
  }
}
@keyframes pbid {
  0%,
  20% {
    left: 0%;
    -webkit-animation-timing-function: ease-out;
    opacity: 0;
  }

  25% {
    opacity: 1;
  }

  35% {
    left: 45%;
    -webkit-animation-timing-function: linear;
  }

  65% {
    left: 60%;
    -webkit-animation-timing-function: ease-in;
  }

  75% {
    opacity: 1;
  }

  80%,
  100% {
    left: 100%;
    opacity: 0;
  }
}
</style>
