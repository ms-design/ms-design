<template>
  <div class="index-page">
    <img class="index-page__logo" src="../assets/images/logo.png">
    <h1 class="index-page__title">MS Design</h1>
    <h2 class="index-pgae___subtitle">Vue components that implement Microsoft's Fluent Design</h2>
  </div>
</template>
<style lang="less" scoped>
.index-page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &__logo {
    width: 300px;
    height: 300px;
    margin-top: 100px;
  }
  &__title {
    font-size: 48px;
    margin: 30px 0 50px;
  }
  &__subtitle {
    font-size: 24px;
  }
}
</style>
