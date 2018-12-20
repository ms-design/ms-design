<template>
  <div class="checkbox-page">
    <ShowComponents title="状态">
      <ShowComponentsItem label="未选中">
        <Checkbox v-model="checked0" @change="handleChange" />
      </ShowComponentsItem>
      <ShowComponentsItem label="选中">
        <Checkbox v-model="checked1" @change="handleChange" />
      </ShowComponentsItem>
      <ShowComponentsItem label="不确定">
        <Checkbox v-model="checked2" @change="handleChange" />
      </ShowComponentsItem>
      <ShowComponentsItem label="未选中禁用">
        <Checkbox :checked="0" :disabled="true" @change="handleChange" />
      </ShowComponentsItem>
      <ShowComponentsItem label="选中禁用">
        <Checkbox :checked="1" :disabled="true" @change="handleChange" />
      </ShowComponentsItem>
      <ShowComponentsItem label="不确定禁用">
        <Checkbox :checked="2" :disabled="true" @change="handleChange" />
      </ShowComponentsItem>
    </ShowComponents>
    <ShowComponents title="标签">
      <ShowComponentsItem label="无标签">
        <Checkbox v-model="checked3" @change="handleChange" />
      </ShowComponentsItem>
      <ShowComponentsItem label="有标签">
        <Checkbox v-model="checked4" @change="handleChange">
          我是标签
        </Checkbox>
      </ShowComponentsItem>
      <ShowComponentsItem label="禁用标签">
        <Checkbox v-model="checked5" :disabled="true" @change="handleChange">
          我是标签
        </Checkbox>
      </ShowComponentsItem>
    </ShowComponents>
    <ShowComponents title="双向绑定">
      <ShowComponentsItem :label="statusText">
        <Checkbox v-model="checked6" @change="handleChange" />
      </ShowComponentsItem>
    </ShowComponents>
  </div>
</template>
<script>
const statusMap = new Map([[0, '未选中'], [1, '已选中'], [2, '不确定']]);

export default {
  name: 'CheckboxPage',
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
