<template>
  <div class="show-components">
    <div class="show-components-header">
      <span class="show-components-title">{{title}}</span>
    </div>
    <div class="show-components-body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShowComponents',
  props: {
    title: {
      type: String,
      default: '组件'
    }
  }
};
</script>
<style lang="less" scoped>
.show-components {
  overflow: hidden;
  &-header {
    border-bottom: 1px solid #a6a6a6;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
  }
  &-title {
    font-size: 18px;
    margin-bottom: 10px;
    display: inline-block;
  }
  &-body {
    max-height: 80vh;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 20px 0;
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}
</style>
