---
title: Radio 单选框
---

<ClientOnly>
<template>
  <show-components title="状态" :linesOfCode="22">
    <show-components-item label="普通">
      <RadioGroup v-model="value1">
        <Radio value="apple">apple</Radio>
        <Radio value="pear">pear</Radio>
        <Radio value="banana">banana</Radio>
      </RadioGroup>
    </show-components-item>
    <show-components-item label="禁用">
      <RadioGroup v-model="value2">
        <Radio value="tomato">tomato</Radio>
        <Radio value="potato" :disabled="true">potato</Radio>
        <Radio value="lettuce">lettuce</Radio>
      </RadioGroup>
    </show-components-item>
<template slot="code">

```vue
<template>
  <RadioGroup v-model="value1">
    <Radio value="apple">apple</Radio>
    <Radio value="pear">pear</Radio>
    <Radio value="banana">banana</Radio>
  </RadioGroup>
  <RadioGroup v-model="value2">
    <Radio value="tomato">tomato</Radio>
    <Radio value="potato" :disabled="true">potato</Radio>
    <Radio value="lettuce">lettuce</Radio>
  </RadioGroup>
</template>
<script>
export default {
  data() {
    return {
      value1: 'apple',
      value2: ''
    };
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
      value1: 'apple',
      value2: ''
    };
  }
};
</script>

### API

#### Radio props
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :------------ | :------------ | :------------ | :------------ | :------------ |
| value | 被选中时的值, 支持 `v-model` | String \| Number | — | 无 |
| disabled | 是否禁用 | Boolean | `true` \| `false` | `false` |

#### RadioGroup props
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :------------ | :------------ | :------------ | :------------ | :------------ |
| value | 指定当前选中的项 | String \| Number | — | 无 |

#### RadioGroup events
| 事件名 | 说明 | 返回值 |
| :------------ | :------------ | :------------ |
| change | 单选框被点击选项状态发生改变时触发 | 当前选中的项 |