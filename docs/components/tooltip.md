---
title: Tooltip 文字提示
---
<ClientOnly>
<template>
  <show-components title="位置" :linesOfCode="24">
    <show-components-item>
      <Tooltip content="tips..." placement="top" @show="handleShow" @hide="handleHide">
        <Button>上</Button>
      </Tooltip>
    </show-components-item>
    <show-components-item>
      <Tooltip content="tips..." placement="top-right" @show="handleShow" @hide="handleHide">
        <Button>右上</Button>
      </Tooltip>
    </show-components-item>
    <show-components-item>
      <Tooltip content="tips..." placement="right" @show="handleShow" @hide="handleHide">
        <Button>右</Button>
      </Tooltip>
    </show-components-item>
    <show-components-item>
      <Tooltip content="tips..." placement="bottom-right" @show="handleShow" @hide="handleHide">
        <Button>右下</Button>
      </Tooltip>
    </show-components-item>
    <show-components-item>
      <Tooltip content="tips..." placement="bottom" @show="handleShow" @hide="handleHide">
        <Button>下</Button>
      </Tooltip>
    </show-components-item>
    <show-components-item>
      <Tooltip content="tips..." placement="bottom-left" @show="handleShow" @hide="handleHide">
        <Button>左下</Button>
      </Tooltip>
    </show-components-item>
    <show-components-item>
      <Tooltip content="tips..." placement="left" @show="handleShow" @hide="handleHide">
        <Button>左</Button>
      </Tooltip>
    </show-components-item>
    <show-components-item>
      <Tooltip content="tips..." placement="top-left" @show="handleShow" @hide="handleHide">
        <Button>左上</Button>
      </Tooltip>
    </show-components-item>
<template slot="code">

```vue
<Tooltip content="tips..." placement="top">
  <Button>上</Button>
</Tooltip>
<Tooltip content="tips..." placement="top-right">
  <Button>右上</Button>
</Tooltip>
<Tooltip content="tips..." placement="right">
  <Button>右</Button>
</Tooltip>
<Tooltip content="tips..." placement="bottom-right">
  <Button>右下</Button>
</Tooltip>
<Tooltip content="tips..." placement="bottom">
  <Button>下</Button>
</Tooltip>
<Tooltip content="tips..." placement="bottom-left">
  <Button>左下</Button>
</Tooltip>
<Tooltip content="tips..." placement="left">
  <Button>左</Button>
</Tooltip>
<Tooltip content="tips..." placement="top-left">
  <Button>左上</Button>
</Tooltip>
```

</template>
  </show-components>
    <show-components title="渐变" :linesOfCode="12">
    <show-components-item>
      <Tooltip content="tips..." placement="top" :transition="true" @show="handleShow" @hide="handleHide">
        <Button>有渐变动画</Button>
      </Tooltip>
    </show-components-item>
    <show-components-item>
      <Tooltip content="tips..." placement="top" :transition="false" @show="handleShow" @hide="handleHide">
        <Button>无渐变动画</Button>
      </Tooltip>
    </show-components-item>
<template slot="code">

```vue
<Tooltip content="tips..." placement="top" delay="300">
  <Button>延迟300ms</Button>
</Tooltip>
<Tooltip content="tips..." placement="top" delay="500">
  <Button>延迟500ms</Button>
</Tooltip>
<Tooltip content="tips..." placement="top" delay="1000">
  <Button>延迟1s</Button>
</Tooltip>
<Tooltip content="tips..." placement="top" delay="1500">
  <Button>延迟1.5s</Button>
</Tooltip>
```

</template>
  </show-components>
  <show-components title="延迟" :linesOfCode="12">
    <show-components-item>
      <Tooltip content="tips..." placement="top" delay="300" @show="handleShow" @hide="handleHide">
        <Button>延迟300ms</Button>
      </Tooltip>
    </show-components-item>
    <show-components-item>
      <Tooltip content="tips..." placement="top" delay="500" @show="handleShow" @hide="handleHide">
        <Button>延迟500ms</Button>
      </Tooltip>
    </show-components-item>
    <show-components-item>
      <Tooltip content="tips..." placement="top" delay="1000" @show="handleShow" @hide="handleHide">
        <Button>延迟1s</Button>
      </Tooltip>
    </show-components-item>
    <show-components-item>
      <Tooltip content="tips..." placement="top" delay="1500" @show="handleShow" @hide="handleHide">
        <Button>延迟1.5s</Button>
      </Tooltip>
    </show-components-item>
<template slot="code">

```vue
<Tooltip content="tips..." placement="top" delay="300">
  <Button>延迟300ms</Button>
</Tooltip>
<Tooltip content="tips..." placement="top" delay="500">
  <Button>延迟500ms</Button>
</Tooltip>
<Tooltip content="tips..." placement="top" delay="1000">
  <Button>延迟1s</Button>
</Tooltip>
<Tooltip content="tips..." placement="top" delay="1500">
  <Button>延迟1.5s</Button>
</Tooltip>
```

</template>
  </show-components>
  <show-components title="偏移" :linesOfCode="24">
    <show-components-item>
      <Tooltip content="tips..." placement="top" offset="1" @show="handleShow" @hide="handleHide">
        <Button>上偏移1px</Button>
      </Tooltip>
    </show-components-item>
    <show-components-item>
      <Tooltip content="tips..." placement="top-right" offset="2" @show="handleShow" @hide="handleHide">
        <Button>右上偏移2px</Button>
      </Tooltip>
    </show-components-item>
    <show-components-item>
      <Tooltip content="tips..." placement="right" offset="3" @show="handleShow" @hide="handleHide">
        <Button>右偏移3px</Button>
      </Tooltip>
    </show-components-item>
    <show-components-item>
      <Tooltip content="tips..." placement="bottom-right" offset="4" @show="handleShow" @hide="handleHide">
        <Button>右下偏移4px</Button>
      </Tooltip>
    </show-components-item>
    <show-components-item>
      <Tooltip content="tips..." placement="bottom" offset="5" @show="handleShow" @hide="handleHide">
        <Button>下偏移5px</Button>
      </Tooltip>
    </show-components-item>
    <show-components-item>
      <Tooltip content="tips..." placement="bottom-left" offset="6" @show="handleShow" @hide="handleHide">
        <Button>左下偏移6px</Button>
      </Tooltip>
    </show-components-item>
    <show-components-item>
      <Tooltip content="tips..." placement="left" offset="7" @show="handleShow" @hide="handleHide">
        <Button>左偏移7px</Button>
      </Tooltip>
    </show-components-item>
    <show-components-item>
      <Tooltip content="tips..." placement="top-left" offset="8" @show="handleShow" @hide="handleHide">
        <Button>左上偏移8px</Button>
      </Tooltip>
    </show-components-item>
<template slot="code">

```vue
<Tooltip content="tips..." placement="top" offset="1">
  <Button>上偏移1px</Button>
</Tooltip>
<Tooltip content="tips..." placement="top-right" offset="2">
  <Button>右上偏移2px</Button>
</Tooltip>
<Tooltip content="tips..." placement="right" offset="3">
  <Button>右偏移3px</Button>
</Tooltip>
<Tooltip content="tips..." placement="bottom-right" offset="4">
  <Button>右下偏移4px</Button>
</Tooltip>
<Tooltip content="tips..." placement="bottom" offset="5">
  <Button>下偏移5px</Button>
</Tooltip>
<Tooltip content="tips..." placement="bottom-left" offset="6">
  <Button>左下偏移6px</Button>
</Tooltip>
<Tooltip content="tips..." placement="left" offset="7">
  <Button>左偏移7px</Button>
</Tooltip>
<Tooltip content="tips..." placement="top-left" offset="8">
  <Button>左上偏移8px</Button>
</Tooltip>
```

</template>
  </show-components>
</template>
</ClientOnly>

<script>
export default {
  methods: {
    handleShow() {
      console.log('提示框显示');
    },
    handleHide() {
      console.log('提示框隐藏');
    }
  }
}
</script>

### API

#### Tooltip props
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :------------ | :------------ | :------------ | :------------ | :------------ |
| content | 提示内容 | String | - | `''` |
| disabled | 是否禁用 | Boolean | `true` \| `false` | `false` |
| placement | 提示框出现的位置 | String | `'top-left'`、`'top'`、 `'top-right'`、`'right'`、`'bottom-right'`、`'bottom'`、`'bottom-left'`、`'left'` | `'top'` |
| delay | 显示延迟 | String \| Number | - | `0` |
| offset | 位置偏移量 | String \| Number | - | `0` |
| transition | 提示框出现时是否显示渐变动画 | Boolean | `true` \| `false` | `true` |

#### Tooltip events
| 事件名 | 说明 | 返回值 |
| :------------ | :------------ | :------------ |
| show | 提示框显示时触发 | 无 |
| hide | 提示框消失时触发 | 无 |