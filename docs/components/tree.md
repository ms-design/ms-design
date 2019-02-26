---
title: Tree 树形控件
---

<ClientOnly>
<template>
  <show-components title="基础用法" :linesOfCode="50">
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
  
  <show-components title="带选框的树" :linesOfCode="26">
    <show-components-item :label="">
       <Tree :data="data" />
    </show-components-item>
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

#### Tree props
| 属性          | 说明         | 类型    | 可选值 | 默认值     |
| :------------ | :----------- | :------ | :----- | :--------- |
| data          | 数据源       | Array   | —     | 无         |
| showCheckbox  | 是否展示选框 | Boolean | —     | false      |
| labelField    | 文本字段     | String  | —     | "label"    |
| childrenField | 子节点字段   | String  | —     | "children" |

#### Tree event
| 事件名 | 说明                 | 返回值       |
| :----- | :------------------- | :----------- |
| input  | 输入框内容改变时触发 | 改变后的内容 |
| focus  | 输入框聚焦时触发     | 无           |
| blur   | 输入框失去焦点时触发 | 无           |
