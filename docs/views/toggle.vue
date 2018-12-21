<template>
  <div class="toggle-page">
    <ShowComponents title="状态">
      <ShowComponentsItem label="未打开">
        <Toggle v-model="value1" @change="handleChange"></Toggle>
      </ShowComponentsItem>
      <ShowComponentsItem label="已打开">
        <Toggle v-model="value2" @change="handleChange"></Toggle>
      </ShowComponentsItem>
      <ShowComponentsItem label="未打开禁用">
        <Toggle v-model="value3" :disabled="true"></Toggle>
      </ShowComponentsItem>
      <ShowComponentsItem label="已打开禁用">
        <Toggle v-model="value4" :disabled="true"></Toggle>
      </ShowComponentsItem>
    </ShowComponents>
  </div>
</template>
<script>
export default {
  name: 'TogglePage',
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
