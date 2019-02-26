---
title: Transition 过渡动画
---

<ClientOnly>
<template>
  <show-components title="CollapseTransition" :linesOfCode="23">
    <show-components-item label="">
       <Button type="default" @click="toggle1=!toggle1">click</Button>
       <collapse-transition>
            <ul v-show="toggle1">
                <li>java</li>
                <li>c++</li>
                <li>js</li>
            </ul>
        </collapse-transition>
    </show-components-item>
   
<template slot="code">

```vue
<template>
    <div>
        <Button type="default" @click="toggle1 = !toggle1">click</Button>
        <collapse-transition>
            <ul v-show="toggle1">
                <li>java</li>
                <li>c++</li>
                <li>js</li>
            </ul>
        </collapse-transition>
    </div>
<template>

<script>
export default {
  data() {
    return {
      toggle1:false
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
      toggle1:false
    };
  }
};
</script>
