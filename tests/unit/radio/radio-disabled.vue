<template>
  <RadioGroup v-model="value" @change="handleChange">
    <Radio value="label1" :disabled="true">label1</Radio>
    <Radio value="label2" :disabled="true">label2</Radio>
    <Radio value="label3" :disabled="true">label3</Radio>
  </RadioGroup>
</template>
<script>
import Radio from '@/components/radio';

export default {
  components: {
    Radio,
    RadioGroup: Radio.Group
  },
  data() {
    return {
      value: ''
    };
  },
  methods: {
    handleChange() {
      this.$emit('change');
    }
  }
};
</script>
