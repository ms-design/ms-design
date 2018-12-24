<template>
  <div class="radio-page">
    <show-components title="状态">
      <show-components-item label="普通">
        <RadioGroup v-model="value1">
          <Radio value="chen">chen</Radio>
          <Radio value="wen">wen</Radio>
          <Radio value="gang">gang</Radio>
        </RadioGroup>
      </show-components-item>
      <show-components-item label="禁用">
        <RadioGroup v-model="value2">
          <Radio value="chen">chen</Radio>
          <Radio value="wen" :disabled="true">wen</Radio>
          <Radio value="gang">gang</Radio>
        </RadioGroup>
      </show-components-item>
    </show-components>
  </div>
</template>
<script>
export default {
  name: 'RadioPage',
  data() {
    return {
      value1: 'chen',
      value2: ''
    };
  }
};
</script>
