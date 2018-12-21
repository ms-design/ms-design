<template>
  <div class="container">
    <nav class="side-pane">
      <ul>
        <li v-for="(item, index) in sideMenuItems" :key="index">
          <router-link :to="item.path">{{item.label}}</router-link>
        </li>
      </ul>
    </nav>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      sideMenuItems: [
        {
          path: '/',
          label: 'Home'
        },
        {
          path: '/button',
          label: 'Button'
        },
        {
          path: '/checkbox',
          label: 'Checkbox'
        },
        {
          path: '/input',
          label: 'Input'
        },
        {
          path: '/icon',
          label: 'Icon'
        },
        {
          path: '/toggle',
          label: 'Toggle'
        }
      ]
    };
  }
};
</script>

<style lang="less">
@import './assets/styles/index.less';

.container {
  display: flex;
  width: 100%;
  overflow: hidden;
  .side-pane {
    width: 250px;
    height: 100vh;
    flex: auto 0 0;
    border-right: 1px solid #eee;
    li a {
      display: block;
      width: 100%;
      height: 50px;
      line-height: 50px;
      padding-left: 30px;
      text-decoration: none;
      color: rgb(51, 51, 51);
      box-shadow: 0 0 0 #000;
      font-size: 16px;
      transition: background-color 0.2s;
      border-bottom: 1px solid rgb(234, 234, 234);
      &:hover {
        background-color: rgb(234, 234, 234);
      }
    }
  }
  .content {
    overflow: hidden;
    flex: 100% 1 1;
    padding: 30px;
  }
}
</style>
