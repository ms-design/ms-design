<template>
  <div class="input-page">
    <show-components title="类型">
      <show-components-item label="文本">
        <Input type="text" />
      </show-components-item>
      <show-components-item label="密码">
        <Input type="password" />
      </show-components-item>
    </show-components>
    <show-components title="状态">
      <show-components-item label="正常">
        <Input />
      </show-components-item>
      <show-components-item label="禁用">
        <Input :disabled="true" />
      </show-components-item>
    </show-components>
    <show-components title="占位符">
      <show-components-item label="无占位符">
        <Input />
      </show-components-item>
      <show-components-item label="有占位符">
        <Input placeholder="我是占位符" />
      </show-components-item>
    </show-components>
    <show-components title="双向绑定">
      <show-components-item :label="'[' + value + ']'">
        <Input v-model="value"/>
      </show-components-item>
    </show-components>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ''
    };
  }
};
</script>
