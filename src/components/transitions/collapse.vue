<template>
  <transition
    tag="div"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
    @before-leave="beforeLeave"
    @after-leave="afterLeave"
  >
    <slot />
  </transition>
</template>

<script>
/* eslint-disable */
import { addClass, removeClass } from '../../utils/index.js';

export default {
  name: 'CollapseTransition',
  data() {
    return {
      speed: 300 // ms
    };
  },
  methods: {
    beforeEnter(el) {
      addClass(el, 'collapse-transition');
      if (!el.dataset) el.dataset = {};

      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;

      el.style.height = '0';
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    },
    enter(el, done) {
      el.dataset.oldOverflow = el.style.overflow;
      if (el.scrollHeight !== 0) {
        el.style.height = `${el.scrollHeight}px`;
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      } else {
        el.style.height = '';
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      }

      el.style.overflow = 'hidden';
      setTimeout(() => {
        done();
      }, this.speed);
    },
    afterEnter(el) {
      removeClass(el, 'collapse-transition');
      el.style.height = '';
      el.style.overflow = el.dataset.oldOverflow;
    },
    beforeLeave(el) {
      addClass(el, 'collapse-transition');
      if (!el.dataset) el.dataset = {};
      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.dataset.oldOverflow = el.style.overflow;

      el.style.height = `${el.scrollHeight}px`;

      el.style.overflow = 'hidden';
    },
    leave(el, done) {
      if (el.scrollHeight !== 0) {
        addClass(el, 'collapse-transition');
        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      }
      setTimeout(() => {
        done();
      }, this.speed);
    },
    afterLeave(el) {
      removeClass(el, 'collapse-transition');
      el.style.height = '';
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }
  }
};
</script>

<style lang="less">
.collapse-transition {
  transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out,
    0.3s padding-bottom ease-in-out;
}
</style>