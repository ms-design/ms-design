<template>
  <div class="ms-tree">
    <TreeNode
      v-for="node in data"
      :key="node[labelField]"
      :title="node[labelField]"
      :children="node[childrenField]"
    />
  </div>
</template>
<script>
import TreeNode from './treeNode.vue';

export default {
  name: 'Tree',
  components: {
    TreeNode
  },
  provide() {
    return {
      msTree: this
    };
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    // 是否显示checkbox
    showCheckbox: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    labelField: {
      type: String,
      default: 'label'
    },
    childrenField: {
      type: String,
      default: 'children'
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less">
</style>
