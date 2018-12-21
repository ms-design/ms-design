<template>
  <div class="radio-page">
    <ShowComponents title="状态">
      <ShowComponentsItem label="未选中">
        <Radio v-model="value1" @change="handleChange"></Radio>
      </ShowComponentsItem>
      <ShowComponentsItem label="已打开">
        <Radio v-model="value2" @change="handleChange"></Radio>
      </ShowComponentsItem>
      <ShowComponentsItem label="未打开禁用">
        <Radio v-model="value3" :disabled="true"></Radio>
      </ShowComponentsItem>
      <ShowComponentsItem label="已打开禁用">
        <Radio v-model="value4" :disabled="true"></Radio>
      </ShowComponentsItem>
    </ShowComponents>
  </div>
</template>
<script>
export default {
  name: 'RadioPage',
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
