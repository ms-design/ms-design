<template>
  <div class="show-icon" :title="label" :data-clipboard-text="clipData" @click="handleClick">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ShowIcon',
  props: {
    label: {
      type: String,
      default: 'Icon'
    }
  },
  computed: {
    clipData() {
      return `<Icon type="${this.label}"></Icon>`;
    }
  },
  methods: {
    handleClick() {
      const clipMsg = `${this.clipData}\n\n已复制到剪切板`;
      /* eslint-disable no-alert */
      alert(clipMsg);
      /* eslint-enable */
      console.log(clipMsg);
    }
  }
};
</script>
<style lang="less" scoped>
.show-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background: none;
  cursor: pointer;
  &:hover {
    background-color: #f4f4f4;
  }
}
</style>
