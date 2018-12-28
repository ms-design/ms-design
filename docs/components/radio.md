---
title: Radio 单选框
---

<ClientOnly>
  <demo-radio />
</ClientOnly>

### API

#### Radio props
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :------------ | :------------ | :------------ | :------------ | :------------ |
| value | 被选中时的值 | String \| Number | — | 无 |
| disabled | 是否禁用 | Boolean | `true` \| `false` | `false` |

#### RadioGroup props
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :------------ | :------------ | :------------ | :------------ | :------------ |
| value | 指定当前选中的项 | String \| Number | — | 无 |

#### RadioGroup events
| 事件名 | 说明 | 返回值 |
| :------------ | :------------ | :------------ |
| change | 单选框被点击选项状态发生改变时触发 | 当前选中的项 |