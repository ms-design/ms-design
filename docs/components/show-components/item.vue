<template>
  <div class="show-components-item">
    <label class="label">{{label}}</label>
    <div class="components" :class="{'horizental': horizental}">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShowComponentsItem',
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
  overflow: hidden;
  .label {
    display: block;
    height: 18px;
    width: 100%;
    line-height: 18px;
    margin-bottom: 20px;
  }
  .components {
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
