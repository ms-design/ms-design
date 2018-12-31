---
title: Input 输入框
---

<ClientOnly>
<template>
  <show-components title="类型" :linesOfCode="2">
    <show-components-item label="文本">
      <Input type="text" />
    </show-components-item>
    <show-components-item label="密码">
      <Input type="password" />
    </show-components-item>
<template slot="code">

```vue
<Input type="text" />
<Input type="password" />
```

</template>
  </show-components>
  <show-components title="状态" :linesOfCode="2">
    <show-components-item label="正常">
      <Input type="text" />
    </show-components-item>
    <show-components-item label="禁用">
      <Input :disabled="true" />
    </show-components-item>
<template slot="code">

```vue
<Input type="text" />
<Input :disabled="true" />
```

</template>
  </show-components>
  <show-components title="占位符" :linesOfCode="2">
    <show-components-item label="无占位符">
      <Input type="text" />
    </show-components-item>
    <show-components-item label="有占位符">
      <Input placeholder="我是占位符" />
    </show-components-item>
<template slot="code">

```vue
<Input type="text" />
<Input placeholder="我是占位符" />
```

</template>
  </show-components>
  <show-components title="双向绑定" :linesOfCode="13">
    <show-components-item :label="'[' + value + ']'">
      <Input v-model="value"/>
    </show-components-item>
<template slot="code">

```vue
<template>
  <span>{{ value }}</span>
  <Input v-model="value" />
</template>
<script>
export default {
  data() {
    return {
      value: ''
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
      value: ''
    };
  }
};
</script>

### API

#### Input props
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :------------ | :------------ | :------------ | :------------ | :------------ |
| value | 输入框的值, 支持 `v-model` | String | — | 无 |
| type | 输入框类型 | String | `text`、`password` 或者不设置 | `text` |
| disabled | 输入框是否禁用 | Boolean | `true` \| `false` | `false` |

#### Input event
| 事件名 | 说明 | 返回值 |
| :------------ | :------------ | :------------ |
| input | 输入框内容改变时触发 | 改变后的内容 |
| focus | 输入框聚焦时触发 | 无 |
| blur | 输入框失去焦点时触发 | 无 |