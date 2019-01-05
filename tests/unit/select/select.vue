<template>
  <div class="select-test">
    <Select
      v-model="value"
      :disabled="disabled"
      :data-list="dataList"
    />
    <hr>
    <div
      ref="other"
      class="other"
    />
  </div>
</template>
<script>
import Select from '@/components/select';

export default {
  components: {
    Select
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    dataList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      value: ''
    };
  }
};
</script>
<style lang="less" scoped>
.select-test {
  width: 100vw;
  height: 100vh;
  .other {
    margin-top: 500px;
    width: 100px;
    height: 100px;
  }
}
</style>
