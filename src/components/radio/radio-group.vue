<template>
  <div class="ms-radio-group">
    <slot />
  </div>
</template>
<script>
/**
 * RadioGroup
 * @module components/radio-group
 * @desc   单选框组合
 * @param  {String|Number} value - 当前被选中的值(支持v-model)
 *
 * @example
 * <RadioGroup v-model="value">
 *   <Radio value="1">label1</Radio>
 *   <Radio value="2">label2</Radio>
 *   <Radio value="3">label3</Radio>
 * </RadioGroup>
 */
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
