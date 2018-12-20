<template>
  <div class="input-page">
    <ShowComponents title="类型">
      <ShowComponentsItem label="文本">
        <Input type="text" />
      </ShowComponentsItem>
      <ShowComponentsItem label="密码">
        <Input type="password" />
      </ShowComponentsItem>
    </ShowComponents>
    <ShowComponents title="状态">
      <ShowComponentsItem label="正常">
        <Input />
      </ShowComponentsItem>
      <ShowComponentsItem label="禁用">
        <Input :disabled="true" />
      </ShowComponentsItem>
    </ShowComponents>
    <ShowComponents title="占位符">
      <ShowComponentsItem label="无占位符">
        <Input />
      </ShowComponentsItem>
      <ShowComponentsItem label="有占位符">
        <Input placeholder="我是占位符" />
      </ShowComponentsItem>
    </ShowComponents>
    <ShowComponents title="双向绑定">
      <ShowComponentsItem :label="'[' + value + ']'">
        <Input v-model="value"/>
      </ShowComponentsItem>
    </ShowComponents>
  </div>
</template>
<script>
export default {
  name: 'InputPage',
  data() {
    return {
      value: ''
    };
  }
};
</script>
