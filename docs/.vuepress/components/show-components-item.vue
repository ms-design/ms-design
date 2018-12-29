<template>
  <div class="show-components-item">
    <label class="show-components-item__label">{{label}}</label>
    <div class="show-components-item__component" :class="{'horizental': horizental}">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: '组件'
    },
    horizental: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="less" scoped>
.show-components-item {
  display: inline-block;
  margin-right: 100px;
  &__label {
    display: block;
    height: 18px;
    width: 100%;
    line-height: 18px;
    margin-bottom: 20px;
  }
  &__component {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    & > *:not(:last-child) {
      margin-bottom: 15px;
    }
    &.horizental {
      display: block;
      & > *:not(:last-child) {
        margin-right: 15px;
      }
    }
  }
}
</style>
