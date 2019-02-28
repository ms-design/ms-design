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
  <show-components title="带选框的树" :linesOfCode="50">
    <show-components-item label="" >
       <p>选中id： {{this.select}}</p>
       <Tree :data="data2" v-model="select" :showCheckbox="true"/>
    </show-components-item>

  <template slot="code">

```vue
<template>
    <div>
        <p>选中id： {{this.select}}</p>
        <Tree :data="data2" v-model="select" :showCheckbox="true"/>
    </div>
<template>

<script>
export default {
  data() {
    return {
      select:[3,7,8],
      data2:[{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
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
      select:[3,7,8],
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
        }],
        data2:[{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
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
| value | 被选中时的值, 支持 `v-model` | Array  | — | 无 |
| labelField    | 文本字段     | String  | —     | "label"    |
| idField    |  节点唯一标识     | String \| Number  | —     | "id"    |
| childrenField | 子节点字段   | String  | —     | "children" |

#### Tree event
| 事件名 | 说明                 | 返回值       |
| :----- | :------------------- | :----------- |
| input  | 树的选择项变化的时候 | 改变后的内容 |

