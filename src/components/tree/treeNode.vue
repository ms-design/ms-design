<template>
  <div
    class="ms-treenode"
    :class="`ms-treenode_level${node.LEVEL}`"
  >
    <div
      :class="`ms-treenode_level${node.LEVEL}__item ms-treenode__item`"
      :style="{'padding-left':node.LEVEL>1?'20px':0}"
    >
      <span class="ms-treenode-left_empty" />
      <span
        v-if="!isHasChildren"
        class="ms-treenode_empty"
      />
      <Checkbox
        v-if="msTree.showCheckbox"
        v-model="node.isChecked"
        @change="handleChange(node)"
      />
      <Icon
        v-if="isHasChildren && !isExpand"
        type="ChevronRight3Legacy"
        class="ms-treenode_expand ms-treenode_icon"
        size="14"
        @click="handleExpand"
      />
      <Icon
        v-if="isHasChildren && isExpand"
        type="ScrollChevronDownLegacy"
        class="ms-treenode_icon"
        size="14"
        @click="handleExpand"
      />
      <span class="ms-treenode__title">
        {{ title }}
      </span>
      <span class="ms-treenode-right_empty" />
    </div>
    <collapse-transition>
      <div
        v-show="isExpand"
        :class="`ms-treenode_level${node.LEVEL}__chidren`"
      >
        <TreeNode
          v-for="subNode in children"
          :key="subNode[msTree.idField] || subNode[msTree.labelField]"
          class="ms-treenode__chidren-item"
          :title="subNode[msTree.labelField]"
          :children="subNode[msTree.childrenField]"
          :node="subNode"
        />
      </div>
    </collapse-transition>
  </div>
</template>
<script>
/* eslint-disable */
import CollapseTransition from '../transitions/index.js';
import Icon from '../icon';
import Checkbox from '../checkbox'

export default {
  name: 'TreeNode',
  components: {
    CollapseTransition,
    Icon,
    Checkbox
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  inject: {
    msTree: {}
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    children: {
      type: Array,
      default() {
        return [];
      }
    },
    value: {
      type: String,
      default: ''
    },
    showCheckbox: {
      type: Boolean,
      default: true
    },
    node: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      isExpand: false,
      // 当前正在操作的node
      currentChangeNode: null
    };
  },
  computed: {
    isHasChildren() {
      return !!(
        this.children &&
        this.children.length &&
        this.children.length > 0
      );
    }
  },
  methods: {
    handleExpand() {
      this.isExpand = !this.isExpand;
    },
    handleChange(node) {
      this.currentChangeNode = node;
      // 选中
      if (node.isChecked === 1) {
        this.selectNode(node);
      }
      // 取消选中
      if (node.isChecked === 0) {
        this.cancelNode(node);
      }
      this.msTree.emit();
    },
    // 选中某个节点,isRunToTop是否是向上执行
    selectNode(node, isRunToTop = false) {
      const idField = this.msTree.idField;
      const parentField = 'parent';
      const childrenField = this.msTree.childrenField;

      // 处理方式
      if (this.isInValue(node[idField])) return;
      if (isRunToTop) {
        // 向上执行的时候，看下级是否全部选中，如果是，则选中,继续执行，否则不往上执行了
        let isAllChecked = false;
        isAllChecked = node[childrenField].every(item => item.isChecked);
        if (!isAllChecked) return;
      }
      this.msTree.value.push(node[idField]);
      node.isChecked = 1;

      // 当前点击的对象以及父，向上执行。
      if (
        (this.currentChangeNode.LEVEL > node.LEVEL ||
          this.currentChangeNode[idField] === node[idField]) &&
        node.hasOwnProperty(parentField) &&
        node[parentField]
      ) {
        this.selectNode(node[parentField], true);
      }

      // 当前点击的对象以及下一级的子，向下执行。
      if (
        (this.currentChangeNode.LEVEL < node.LEVEL ||
          this.currentChangeNode[idField] === node[idField]) &&
        node.hasOwnProperty(childrenField) &&
        node[childrenField].length
      ) {
        node[childrenField].forEach(subNode => this.selectNode(subNode));
      }
    },
    // 取消某个节点
    cancelNode(node) {
      const idField = this.msTree.idField;
      const parentField = 'parent';
      const childrenField = this.msTree.childrenField;

      // 处理方式
      if (!this.isInValue(node[idField])) return;
      const index = this.msTree.value.indexOf(node[idField]);
      this.msTree.value.splice(index, 1);
      node.isChecked = 0;

      // 当前点击的对象以及父，向上执行。
      if (
        (this.currentChangeNode.LEVEL > node.LEVEL ||
          this.currentChangeNode[idField] === node[idField]) &&
        node.hasOwnProperty(parentField) &&
        node[parentField]
      ) {
        this.cancelNode(node[parentField]);
      }

      // 当前点击的对象以及下一级的子，向下执行。
      if (
        (this.currentChangeNode.LEVEL < node.LEVEL ||
          this.currentChangeNode[idField] === node[idField]) &&
        node.hasOwnProperty(childrenField) &&
        node[childrenField].length
      ) {
        node[childrenField].forEach(subNode => this.cancelNode(subNode, false));
      }
    },
    // 是否在msTree的value中
    isInValue(val) {
      return this.msTree.value.includes(val);
    }
  }
};
</script>
<style lang="less">
@import '~@/assets/styles/variable.less';

@icon_height : 14px;
@icon_width : 14px;
@fontSize: 14px;

.ms-treenode {
  .ms-checkbox-container {
    vertical-align: text-top;
  }
  .ms-treenode_icon,
  .ms-treenode_empty {
    display: inline-block;
    cursor: default;
    width: @icon_width;
    height: @icon_height;
    margin-right: 10px;
  }
  .ms-treenode__title {
    font-size: @fontSize;
    color: @base-black-color;
  }
  .ms-treenode__item {
    height: 30px;
    line-height: 30px;
    &:hover {
      background: rgb(153, 201, 239);
    }
    cursor: default;
  }
  .ms-treenode-right_empty,
  .ms-treenode-left_empty {
    display: inline-block;
    cursor: default;
    width: 10px;
  }
}
</style>
