---
title: Slider 滑块
---

<ClientOnly>
<template>
  <show-components title="状态" :linesOfCode="22">
    <show-components-item label="普通" style="width: 100%;">
      <Slider v-model="value1" @change="handleChange" @input="handleInput" />
    </show-components-item>
    <show-components-item label="禁用" style="width: 100%;margin-top: 50px;">
      <Slider v-model="value2" :disabled="true" />
    </show-components-item>
<template slot="code">

```vue
<template>
  <Slider v-model="value1" @change="handleChange" @input="handleInput" />
  <Slider v-model="value2" :disabled="true" />
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
```

</template>
  </show-components>
</template>
</ClientOnly>

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

### API

#### Slider props

|  属性名 | 说明 | 类型 | 可选值 | 默认值 |
| :------------ | :------------ | :------------ | :------------ | :------------ |
| value | 当前滑块所在刻度, 支持 `v-model` | Number | - | 0 |
| disabled | 是否禁用 | Boolean | `true` \| `false` | `false` |
| step | 步长 | Number | - | 1 |
| min | 最小值 | Number | - | 0 |
| max | 最大值 | Number | - | 100 |

### Slider event

| 事件名 | 说明 | 返回值 |
| :------------ | :------------ | :------------ |
| input | 滑动时实时触发 | 改变后的值 |
| change | 滑动结束松开时后触发, 在滑动过程中不会触发 | 改变后的值 |