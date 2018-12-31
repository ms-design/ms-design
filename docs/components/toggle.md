---
title: Toggle 开关
---
<ClientOnly>
<template>
  <show-components title="状态" :linesOfCode="23">
    <show-components-item label="未打开">
      <Toggle v-model="value1" @change="handleChange" />
    </show-components-item>
    <show-components-item label="已打开">
      <Toggle v-model="value2" @change="handleChange" />
    </show-components-item>
    <show-components-item label="未打开禁用">
      <Toggle v-model="value3" :disabled="true" />
    </show-components-item>
    <show-components-item label="已打开禁用">
      <Toggle v-model="value4" :disabled="true" />
    </show-components-item>
<template slot="code">

```vue
<template>
  <Toggle v-model="value1" @change="handleChange" />
  <Toggle v-model="value2" @change="handleChange" />
  <Toggle v-model="value3" :disabled="true" />
  <Toggle v-model="value4" :disabled="true" />
<template>
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
```

</template>
  </show-components>
</template>
</ClientOnly>

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

### API

#### Toggle props
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :------------ | :------------ | :------------ | :------------ | :------------ |
| checked | 是否被选中, 可以使用 `v-model` 双向绑定数据 | Boolean | `true` \| `false` | `false` |
| disabled | 是否禁用 | Boolean | `true` \| `false` | `false` |

#### Toggle events
| 事件名 | 说明 | 返回值 |
| :------------ | :------------ | :------------ |
| change | 开关被点击选项状态发生变化时触发 | true \| false |