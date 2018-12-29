---
title: Button 按钮
---

<ClientOnly>
<template>
  <show-components title="类型" :linesOfCode="3">
    <show-components-item label="默认按钮">
      <Button @click="handleClick">default</Button>
    </show-components-item>
    <show-components-item label="主按钮">
      <Button type="primary" @click="handleClick">default</Button>
    </show-components-item>
    <show-components-item label="禁用按钮">
      <Button type="disabled" @click="handleClick">disabled</Button>
    </show-components-item>
<template slot="code">

```vue
<Button type="default">空</Button>
<Button type="primary">default</Button>
<Button type="disabled">disabled</Button>
```

</template>
  </show-components>
  <show-components title="尺寸" :linesOfCode="15">
    <show-components-item label="普通按钮">
      <Button @click="handleClick">普通按钮</Button>
      <Button type="primary" @click="handleClick">普通主按钮</Button>
      <Button type="disabled" @click="handleClick">普通禁用按钮</Button>
    </show-components-item>
    <show-components-item label="小按钮">
      <Button size="small" @click="handleClick">小型按钮</Button>
      <Button size="small" type="primary" @click="handleClick">小型主按钮</Button>
      <Button size="small" type="disabled" @click="handleClick">小型禁用按钮</Button>
    </show-components-item>
    <show-components-item label="大按钮">
      <Button size="large" @click="handleClick">大型按钮</Button>
      <Button size="large" type="primary" @click="handleClick">大型主按钮</Button>
      <Button size="large" type="disabled" @click="handleClick">大型禁用按钮</Button>
    </show-components-item>
<template slot="code">

```vue
<div>
  <Button size="default" type="default">普通按钮</Button>
  <Button size="default" type="primary">普通主按钮</Button>
  <Button size="default" type="disabled">普通禁用按钮</Button>
</div>
<div>
  <Button size="small" type="default">小型按钮</Button>
  <Button size="small" type="primary">小型主按钮</Button>
  <Button size="small" type="disabled">小型禁用按钮</Button>
</div>
<div>
  <Button size="large" type="default">大型按钮</Button>
  <Button size="large" type="primary">大型主按钮</Button>
  <Button size="large" type="disabled">大型禁用按钮</Button>
</div>
```

</template>
  </show-components>
</template>
</ClientOnly>

<script>
export default {
  methods: {
    handleClick() {
      alert('按钮被点击');
    }
  }
};
</script>

### API

#### Button props
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :------------ | :------------ | :------------ | :------------ | :------------ |
| type | 按钮类型 | String | `default`、`primary`、`disabled` 或者不设置 | `default` |
| disabled | 是否禁用 | Boolean | `true` \| `false` | `false` |
| size | 按钮大小 | String | `default`、`small`、`large` 或者不设置 | `default` |

#### Button events
| 事件名 | 说明 | 返回值 |
| :------------ | :------------ | :------------ |
| click | 按钮被点击时触发 | 无 |