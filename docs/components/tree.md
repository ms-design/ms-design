---
title: Tree 树形控件
---

<ClientOnly>
<template>
  <show-components title="基础用法" :linesOfCode="23">
    <show-components-item label="">
        <Tree :data="data" />
    </show-components-item>
   
<template slot="code">

```vue
<template>
    <Tree :data="data">
<template>

<script>
export default {
  data() {
    return {
      data:[{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }]
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
      data:[{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }]
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
