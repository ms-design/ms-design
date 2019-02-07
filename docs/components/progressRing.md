---
title: ProgressRing 进度环
---
<ClientOnly>
<template>
  <show-components title="进度确定" :linesOfCode="24">
    <show-components-item>
      <ProgressRing />
    </show-components-item>
    <show-components-item>
      <ProgressRing style="width:80px;height:80px;"/>
    </show-components-item>
    <show-components-item>
      <ProgressRing style="width:100px;height:100px;"/>
    </show-components-item>
<template slot="code">

```vue
<ProgressRing />
<ProgressRing style="width:80px;height:80px;"/>
<ProgressRing style="width:100px;height:100px;"/>
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
  },
  created(){
  }
}
</script>
