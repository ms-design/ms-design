<template>
  <div class="demo-toggle">
    <show-components title="状态">
      <show-components-item label="未打开">
        <Toggle v-model="value1" @change="handleChange"></Toggle>
      </show-components-item>
      <show-components-item label="已打开">
        <Toggle v-model="value2" @change="handleChange"></Toggle>
      </show-components-item>
      <show-components-item label="未打开禁用">
        <Toggle v-model="value3" :disabled="true"></Toggle>
      </show-components-item>
      <show-components-item label="已打开禁用">
        <Toggle v-model="value4" :disabled="true"></Toggle>
      </show-components-item>
    </show-components>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: false,
      value2: true,
      value3: false,
      value4: true
    };
  },
  methods: {
    handleChange(value) {
      console.log(value)
    }
  }
};
</script>
