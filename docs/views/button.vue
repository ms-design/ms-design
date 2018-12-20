<template>
  <div class="button-page">
    <ShowComponents title="类型">
      <ShowComponentsItem label="默认按钮">
        <Button @click="handleClick">空</Button>
      </ShowComponentsItem>
      <ShowComponentsItem label="主按钮">
        <Button type="primary" @click="handleClick">default</Button>
      </ShowComponentsItem>
      <ShowComponentsItem label="禁用按钮">
        <Button type="disabled" @click="handleClick">disabled</Button>
      </ShowComponentsItem>
    </ShowComponents>
    <ShowComponents title="尺寸">
      <ShowComponentsItem label="普通按钮">
        <Button @click="handleClick">普通按钮</Button>
        <Button type="primary" @click="handleClick">普通主按钮</Button>
        <Button type="disabled" @click="handleClick">普通禁用按钮</Button>
      </ShowComponentsItem>
      <ShowComponentsItem label="小按钮">
        <Button size="small" @click="handleClick">小型按钮</Button>
        <Button size="small" type="primary" @click="handleClick">小型主按钮</Button>
        <Button size="small" type="disabled" @click="handleClick">小型禁用按钮</Button>
      </ShowComponentsItem>
      <ShowComponentsItem label="大按钮">
        <Button size="large" @click="handleClick">大型按钮</Button>
        <Button size="large" type="primary" @click="handleClick">大型主按钮</Button>
        <Button size="large" type="disabled" @click="handleClick">大型禁用按钮</Button>
      </ShowComponentsItem>
    </ShowComponents>
  </div>
</template>
<script>
export default {
  name: 'ButtonPage',
  methods: {
    handleClick() {
      alert('按钮被点击');
    }
  }
};
</script>
