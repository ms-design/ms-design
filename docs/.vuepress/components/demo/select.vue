<template>
  <div class="demo-select">
    <Select v-model="value1" :dataList="dataList1"  @change="handleChange"/>
    <Select v-model="value2" :dataList="dataList2"  @change="handleChange"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      dataList1: new Array(10).fill(0).map((item, index) => ({ label: `option${index}`, value: index })),
      dataList2: new Array(0).fill(0).map((item, index) => ({ label: `option${index}`, value: index }))
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>
