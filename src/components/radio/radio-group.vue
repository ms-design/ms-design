<template>
  <div class="ms-radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'RadioGroup',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    changeValue(value) {
      this.$emit('change', value);
    }
  }
};
</script>
<style lang="less">
.ms-radio-group {
  display: inline-flex;
  flex-direction: column;
}
</style>
