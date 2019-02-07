---
title: ProgressBar 进度条
---
<ClientOnly>
<template>
  <show-components title="进度确定" :linesOfCode="24">
    <show-components-item>
      <ProgressBar/>
    </show-components-item>
    <show-components-item>
      <ProgressBar :percent="0"/>
    </show-components-item>
    <show-components-item>
      <ProgressBar :percent="0.3"/>
    </show-components-item>
    <show-components-item>
      <ProgressBar :percent="0.6"/>
    </show-components-item>
    <show-components-item>
      <ProgressBar :percent="0.9"/>
    </show-components-item>
    <show-components-item>
      <ProgressBar :percent="1"/>
    </show-components-item>
<template slot="code">

```vue
<ProgressBar :percent="0"/>
<ProgressBar :percent="0.3"/>
<ProgressBar :percent="0.6"/>
<ProgressBar :percent="0.9"/>
<ProgressBar :percent="1"/>
```

</template>
  </show-components>
  <show-components title="进度不确定" :linesOfCode="24">
    <show-components-item>
      <ProgressBar :isIndeterminate="true"/>
    </show-components-item>
<template slot="code">

```vue
<ProgressBar :isIndeterminate="true"/>
```

</template>
  </show-components>
    
</template>
</ClientOnly>

<script>
export default {
  data(){
    return{
    }
  },
  methods: {
    handleShow() {
      console.log('提示框显示');
    },
    handleHide() {
      console.log('提示框隐藏');
    }
  },
  created(){
  }
}
</script>

### API

#### ProgressBar props
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :------------ | :------------ | :------------ | :------------ | :------------ |
| percent | 百分比 | Number | 0-1 | `0` |
| isIndeterminate | 百分比不确定 | Boolean | `true` \| `false` | `false` |
