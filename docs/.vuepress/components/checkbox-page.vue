<template>
  <div class="checkbox-page">
    <show-components title="状态">
      <show-components-item label="未选中">
        <Checkbox v-model="checked0" @change="handleChange" />
      </show-components-item>
      <show-components-item label="选中">
        <Checkbox v-model="checked1" @change="handleChange" />
      </show-components-item>
      <show-components-item label="不确定">
        <Checkbox v-model="checked2" @change="handleChange" />
      </show-components-item>
      <show-components-item label="未选中禁用">
        <Checkbox :checked="0" :disabled="true" @change="handleChange" />
      </show-components-item>
      <show-components-item label="选中禁用">
        <Checkbox :checked="1" :disabled="true" @change="handleChange" />
      </show-components-item>
      <show-components-item label="不确定禁用">
        <Checkbox :checked="2" :disabled="true" @change="handleChange" />
      </show-components-item>
    </show-components>
    <show-components title="标签">
      <show-components-item label="无标签">
        <Checkbox v-model="checked3" @change="handleChange" />
      </show-components-item>
      <show-components-item label="有标签">
        <Checkbox v-model="checked4" @change="handleChange">
          我是标签
        </Checkbox>
      </show-components-item>
      <show-components-item label="禁用标签">
        <Checkbox v-model="checked5" :disabled="true" @change="handleChange">
          我是标签
        </Checkbox>
      </show-components-item>
    </show-components>
    <show-components title="双向绑定">
      <show-components-item :label="statusText">
        <Checkbox v-model="checked6" @change="handleChange" />
      </show-components-item>
    </show-components>
  </div>
</template>
<script>
const statusMap = new Map([[0, '未选中'], [1, '已选中'], [2, '不确定']]);
export default {
  computed: {
    statusText() {
      return statusMap.get(this.checked6);
    }
  },
  data() {
    return {
      checked0: 0,
      checked1: 1,
      checked2: 2,
      checked3: 0,
      checked4: 0,
      checked5: 0,
      checked6: 2
    };
  },
  methods: {
    handleChange(event) {
      console.log(event);
    }
  }
};
</script>
