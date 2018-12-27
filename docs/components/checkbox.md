---
title: Checkbox 复选框
---

<ClientOnly>
  <checkbox-page />
</ClientOnly>
### API

#### Checkbox props
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :------------ | :------------ | :------------ | :------------ | :------------ |
| checked | 是否被选中, 可以使用 `v-model` 双向绑定数据 | Boolean | `true` \| `false` | `false` |
| disabled | 是否禁用当前项 | Boolean | `true` \| `false` | `false` |

#### Checkbox events
| 事件名 | 说明 | 返回值 |
| :------------ | :------------ | :------------ |
| change | 复选框被点击选项状态发生变化时触发 | `true` \| `false` |