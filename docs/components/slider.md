---
title: Slider 滑块
---

<ClientOnly>
  <slider-page />
</ClientOnly>

### API

#### Slider props

|  属性名 | 说明 | 类型 | 可选值 | 默认值 |
| :------------ | :------------ | :------------ | :------------ | :------------ |
| value | 当前滑块所在刻度, 支持 `v-model`  | Number | - | 0 |
| disabled | 是否禁用 | Boolean | `true` \| `false` | `false` |
| step | 步长 | Number | - | 1 |
| min | 最小值 | Number | - | 0 |
| max | 最大值 | Number | - | 100 |

### Slider event

| 事件名 | 说明 | 返回值 |
| :------------ | :------------ | :------------ |
| input | 滑动时实时触发 | 改变后的值 |
| change | 滑动结束松开时后触发, 在滑动过程中不会触发 | 改变后的值 |