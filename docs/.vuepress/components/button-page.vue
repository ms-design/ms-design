<template>
  <div class="button-page">
    <show-components title="类型">
      <show-components-item label="默认按钮">
        <Button @click="handleClick">空</Button>
      </show-components-item>
      <show-components-item label="主按钮">
        <Button type="primary" @click="handleClick">default</Button>
      </show-components-item>
      <show-components-item label="禁用按钮">
        <Button type="disabled" @click="handleClick">disabled</Button>
      </show-components-item>
    </show-components>
    <show-components title="尺寸">
      <show-components-item label="普通按钮">
        <Button @click="handleClick">普通按钮</Button>
        <Button type="primary" @click="handleClick">普通主按钮</Button>
        <Button type="disabled" @click="handleClick">普通禁用按钮</Button>
      </show-components-item>
      <show-components-item label="小按钮">
        <Button size="small" @click="handleClick">小型按钮</Button>
        <Button size="small" type="primary" @click="handleClick">小型主按钮</Button>
        <Button size="small" type="disabled" @click="handleClick">小型禁用按钮</Button>
      </show-components-item>
      <show-components-item label="大按钮">
        <Button size="large" @click="handleClick">大型按钮</Button>
        <Button size="large" type="primary" @click="handleClick">大型主按钮</Button>
        <Button size="large" type="disabled" @click="handleClick">大型禁用按钮</Button>
      </show-components-item>
    </show-components>
  </div>
</template>
<script>
export default {
  name: 'button-page',
  methods: {
    handleClick() {
      alert('按钮被点击');
    }
  }
};
</script>
