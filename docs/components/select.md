---
title: Select 下拉选择框
---

<ClientOnly>
<template>
  <show-components title="状态" :linesOfCode="21">
    <show-components-item label="普通">
      <Select v-model="value1" :dataList="dataList1"  @change="handleChange" />
    </show-components-item>
    <show-components-item label="暂无数据">
      <Select v-model="value2" :dataList="dataList2"  @change="handleChange" />
    </show-components-item>
<template slot="code">

```vue
<template>
  <Select v-model="value1" :dataList="dataList1"  @change="handleChange" />
  <Select v-model="value2" :dataList="dataList2"  @change="handleChange" />
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
```

</template>
  </show-components>
</template>
</ClientOnly>

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

### API

#### Select props

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :------------ | :------------ | :------------ | :------------ | :------------ |
| value | 当前选中项的值, 支持`v-model` | String \| Number | - | `''` |
| dataList | 下拉列表的数据 | Array<Object{label, value}> | - | `[]` |

#### Select events

| 事件名 | 说明 | 返回值 |
| :------------ | :------------ | :------------ |
| input | 选择列表中数据后触发 | 当前选中项的值 |
| change | 选择列表中数据后触发 | 当前选中项的完整对象 |