<template>
  <div class="demo-toggle">
    <show-components title="状态">
      <show-components-item label="普通" style="width: 100%;">
        <Slider v-model="value1" @change="handleChange" @input="handleInput"></Slider>
      </show-components-item>
      <show-components-item label="禁用" style="width: 100%;margin-top: 50px;">
        <Slider v-model="value2" :disabled="true" @change="handleChange" @input="handleInput"></Slider>
      </show-components-item>
    </show-components>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 30,
      value2: 50
    };
  },
  methods: {
    handleChange(value) {
      console.log(`滑块滑动结束, 最终值为${value}`);
    },
    handleInput(value) {
      console.log(`当前滑块所在刻度值为${value}`);
    }
  }
};
</script>
