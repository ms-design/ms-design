<template>
  <div class="demo-icon">
    <div class="icon-note">
      <span class="icon-note-text">点击图标可复制标签</span>
    </div>
    <div class="icon-list">
      <show-icon v-for="(iconValue, iconKey) in iconList" :key="iconKey" :label="iconKey">
        <Icon :type="iconValue"></Icon>
      </show-icon>
    </div>
  </div>
</template>
<script>
import Clipboard from 'clipboard';
import iconList from '@/components/icon/iconList.js';
export default {
  data() {
    return {
      iconList
    };
  },
  mounted() {
    /* eslint-disable no-new */
    new Clipboard('.demo-icon .show-icon');
    /* eslint-enable */
  }
};
</script>
<style lang="less" scoped>
.icon-note {
  width: 100%;
  padding: 8px 16px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  background-color: #f4f4f4;
  color: #909399;
  &-text {
    font-size: 14px;
  }
}
.icon-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
