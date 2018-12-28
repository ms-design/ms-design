---
title: Select 下拉选择框
---

<ClientOnly>
  <demo-select />
</ClientOnly>

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