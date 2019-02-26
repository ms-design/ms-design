<template>
  <div
    class="ms-treenode"
    :class="`ms-treenode_level${level}`"
  >
    <div
      :class="`ms-treenode_level${level}__item ms-treenode__item`"
      :style="{'padding-left':level>1?'20px':0}"
    >
      <span class="ms-treenode-left_empty" />
      <span
        v-if="!isHasChildren"
        class="ms-treenode_empty"
      />
      <Checkbox
        v-if="msTree.showCheckbox"
        v-model="isChecked"
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
        :class="`ms-treenode_level${level}__chidren`"
      >
        <TreeNode
          v-for="node in children"
          :key="node[msTree.labelField]"
          class="ms-treenode__chidren-item"
          :title="node[msTree.labelField]"
          :children="node[msTree.childrenField]"
          :level="level+1"
        />
      </div>
    </collapse-transition>
  </div>
</template>
<script>
/* eslint-disable */
import CollapseTransition from '../transitions/index.js';

export default {
  name: 'TreeNode',
  components: {
    CollapseTransition
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
    level: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      isChecked: 0,
      isExpand: false
    };
  },
  computed: {
    isHasChildren() {
      return !!(
        this.children
        && this.children.length
        && this.children.length > 0
      );
    }
  },
  methods: {
    handleExpand() {
      this.isExpand = !this.isExpand;
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
