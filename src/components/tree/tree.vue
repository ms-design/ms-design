<template>
  <div class="ms-tree">
    <TreeNode
      v-for="node in copyData"
      :key="node[labelField]"
      :title="node[labelField]"
      :children="node[childrenField]"
      :node="node"
    />
  </div>
</template>
<script>
/* eslint-disable */
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
      type: Array,
      default() {
        return [];
      }
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
    idField: {
      type: String,
      default: 'id'
    },
    childrenField: {
      type: String,
      default: 'children'
    }
  },
  data() {
    return {
      expand: false,
      // 树数据的副本
      copyData: []
    };
  },
  watch: {
    data: {
      handler(val) {
        // 有选框，创建一个数据副本
        // if (this.showCheckbox) {
        this.copy(val);
        return;
        // }
        this.copyData = val;
      },
      immediate: true
    }
  },
  methods: {
    // 递归处理树数据
    deepHandle(treeData, parentNode = null, LEVEL = 1) {
      const copyTreeData = [];
      if (!Array.isArray(treeData)) return;
      treeData.forEach(nodeItem => {
        // 拷贝一个新节点
        const copyNodeItem = {
          [this.labelField]: nodeItem[this.labelField],
          [this.idField]: nodeItem[this.idField],
          LEVEL
        };

        // 挂在父节点
        if (parentNode) {
          copyNodeItem.parent = parentNode;
        }

        // 有选框的时候，是否当前节点为选中节点
        if (this.showCheckbox) {
          const result = this.value.includes(copyNodeItem[this.idField]);
          this.$set(copyNodeItem, 'isChecked', result ? 1 : 0);
        }

        // 递归拷贝children
        if (
          nodeItem.hasOwnProperty(this.childrenField) &&
          nodeItem[this.childrenField].length
        ) {
          this.$set(
            copyNodeItem,
            this.childrenField,
            this.deepHandle(
              nodeItem[this.childrenField],
              copyNodeItem,
              LEVEL + 1
            )
          );
        }

        copyTreeData.push(copyNodeItem);
      });
      return copyTreeData;
    },
    copy(resouceData) {
      this.copyData = this.deepHandle(resouceData);
    },
    emit() {
      this.$emit('change');
    }
  }
};
</script>
<style lang="less">
</style>
