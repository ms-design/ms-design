<template>
  <div class="ms-progress-ring">
    <div class="ms-progress-ring__dot" />
    <div class="ms-progress-ring__dot" />
    <div class="ms-progress-ring__dot" />
    <div class="ms-progress-ring__dot" />
    <div class="ms-progress-ring__dot" />
  </div>
</template>
<script>
/**
 * ProgressRing
 * @module components/progressRing
 * @desc   进度环
 *
 * @example
 * <ProgressRing />
 */
export default {
  name: 'ProgressRing'
};
</script>
<style lang="less">
@import '~@/assets/styles/variable.less';

.ms-progress-ring {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 60px;
  line-height: 1;
  background: none;
  & > &__dot {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(225deg);
    animation: progressRingMotion 5500ms infinite;
    &:after {
      content: '';
      position: absolute;
      border-radius: 100%;
      background: @primary-color;
      width: 6px;
      height: 6px;
    }
  }
  & > &__dot:nth-child(1) {
    animation-delay: 0;
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
@keyframes progressRingMotion {
  0% {
    transform: rotate(225deg);
    opacity: 1;
    animation-timing-function: ease-out;
  }
  7% {
    transform: rotate(345deg);
    animation-timing-function: linear;
  }
  30% {
    transform: rotate(455deg);
    animation-timing-function: ease-in-out;
  }
  39% {
    transform: rotate(690deg);
    animation-timing-function: linear;
  }
  70% {
    transform: rotate(815deg);
    opacity: 1;
    animation-timing-function: ease-out;
  }
  75% {
    transform: rotate(945deg);
    animation-timing-function: ease-out;
  }
  100%,
  76% {
    transform: rotate(945deg);
    opacity: 0;
  }
}
</style>
