---
title: Checkbox 复选框
---

<ClientOnly>
<template>
  <show-components title="状态" :linesOfCode="24">
    <show-components-item label="未选中">
      <Checkbox v-model="checked0" @change="handleChange" />
    </show-components-item>
    <show-components-item label="选中">
      <Checkbox v-model="checked1" @change="handleChange" />
    </show-components-item>
    <show-components-item label="不确定">
      <Checkbox v-model="checked2" @change="handleChange" />
    </show-components-item>
    <show-components-item label="未选中禁用">
      <Checkbox :checked="0" :disabled="true" @change="handleChange" />
    </show-components-item>
    <show-components-item label="选中禁用">
      <Checkbox :checked="1" :disabled="true" @change="handleChange" />
    </show-components-item>
    <show-components-item label="不确定禁用">
      <Checkbox :checked="2" :disabled="true" @change="handleChange" />
    </show-components-item>
<template slot="code">

```vue
<template>
  <Checkbox v-model="checked0" @change="handleChange" />
  <Checkbox v-model="checked1" @change="handleChange" />
  <Checkbox v-model="checked2" @change="handleChange" />
  <Checkbox :checked="0" :disabled="true" @change="handleChange" />
  <Checkbox :checked="1" :disabled="true" @change="handleChange" />
  <Checkbox :checked="2" :disabled="true" @change="handleChange" />
</template>
<script>
export default {
  data() {
    return {
      checked0: 0,
      checked1: 1,
      checked2: 2
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>
```

</template>
  </show-components>
  <show-components title="标签" :linesOfCode="25">
    <show-components-item label="无标签">
      <Checkbox v-model="checked3" @change="handleChange" />
    </show-components-item>
    <show-components-item label="有标签">
      <Checkbox v-model="checked4" @change="handleChange">
        我是标签
      </Checkbox>
    </show-components-item>
    <show-components-item label="禁用标签">
      <Checkbox v-model="checked5" :disabled="true" @change="handleChange">
        我是标签
      </Checkbox>
    </show-components-item>
<template slot="code">

```vue
<template>
  <Checkbox v-model="checked3" @change="handleChange" />
  <Checkbox v-model="checked4" @change="handleChange">
    我是标签
  </Checkbox>
  <Checkbox v-model="checked5" :disabled="true" @change="handleChange">
    我是标签
  </Checkbox>
</template>
<script>
export default {
  data() {
    return {
      checked3: 0,
      checked4: 0,
      checked5: 0
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>
```

</template>
  </show-components>
  <show-components title="双向绑定" :linesOfCode="26">
    <show-components-item :label="statusText">
      <Checkbox v-model="checked6" @change="handleChange" />
    </show-components-item>
<template slot="code">

```vue
<template>
  <span>{{ statusText }}</span>
  <Checkbox v-model="checked6" @change="handleChange" />
</template>
<script>
const statusMap = new Map([[0, '未选中'], [1, '已选中'], [2, '不确定']]);
export default {
  data() {
    return {
      checked6: 2
    };
  },
  computed: {
    statusText() {
      return statusMap.get(this.checked6);
    }
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>
```

</template>
  </show-components>
</template>
</ClientOnly>

<script>
const statusMap = new Map([[0, '未选中'], [1, '已选中'], [2, '不确定']]);
export default {
  computed: {
    statusText() {
      return statusMap.get(this.checked6);
    }
  },
  data() {
    return {
      checked0: 0,
      checked1: 1,
      checked2: 2,
      checked3: 0,
      checked4: 0,
      checked5: 0,
      checked6: 2
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>

### API

#### Checkbox props
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :------------ | :------------ | :------------ | :------------ | :------------ |
| checked | 是否被选中, 可以使用 `v-model` 双向绑定数据 | Number | `0`(未选中)、`1`(已选中)、`2`(不确定) | `0` |
| disabled | 是否禁用当前项 | Boolean | `true` \| `false` | `false` |

#### Checkbox events
| 事件名 | 说明 | 返回值 |
| :------------ | :------------ | :------------ |
| change | 复选框被点击选项状态发生变化时触发 | `true` \| `false` |