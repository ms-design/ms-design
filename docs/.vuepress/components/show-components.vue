<template>
  <div class="show-components">
    <div class="show-components__header">
      <h3 class="show-components__title">{{title}}</h3>
      <div class="show-components__code-control">
        <button type="button" class="code-control__btn" @click.stop="handleButtonClick">
          <Icon class="code-control__btn__icon" :class="statusClass" type="Remote" color="rgb(16, 110, 190)" size="16" />
          <span class="code-control__btn__text">Show code</span>
        </button>
      </div>
    </div>
    <div class="show-components__body">
      <slot></slot>
    </div>
    <div class="show-components__code" :style="codeBlockStyle">
      <slot name="code"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '组件'
    },
    linesOfCode: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isExpand: false
    };
  },
  computed: {
    statusClass() {
      return {
        expand: this.isExpand
      };
    },
    codeBlockStyle() {
      if (this.isExpand && this.linesOfCode > 0) {
        return `height: calc(${this.linesOfCode * 22 + 40}px + 0.85rem);`;
      } else {
        return 'height: 0px';
      }
    }
  },
  methods: {
    handleButtonClick() {
      this.isExpand = !this.isExpand;
    }
  }
};
</script>
<style lang="less">
.show-components {
  &:not(:last-of-type) {
    margin-bottom: 15px;
  }
  &__header {
    border-bottom: 1px solid #a6a6a6;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
  }
  &__title {
    font-size: 18px;
    margin-bottom: 10px;
    display: inline-block;
  }
  &__code-control {
    display: inline-flex;
    float: right;
    .code-control__btn {
      display: inline-flex;
      align-items: center;
      position: relative;
      bottom: -10px;
      background: none;
      background-color: transparent;
      border: 1px solid #a6a6a6;
      border-bottom: 0;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      line-height: 1;
      padding: 10px 12px;
      min-width: 100px;
      transition: border .367s cubic-bezier(0.1, 0.9, 0.2, 1);
      cursor: pointer;
      outline: none;
      &__icon {
        margin-right: 4px;
        transition: transform 0.3s;
        &.expand {
          transform: rotate(90deg);
        }
      }
      &__text {
        font-size: 14px;
        font-weight: 300;
        margin: 0 4px;
      }
    }
  }
  &__body {
    max-height: 80vh;
    padding: 20px 0;
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  &__code {
    transition: height 0.3s;
    will-change: height;
    overflow: hidden;
  }
}
</style>
