<template>
  <div>
    <el-input
      placeholder="输入关键字进行过滤"
      v-model="filterText"
      clearable=""
    ></el-input>
    <el-tree
      class="filter=tree"
      :data="data"
      :props="defaultProps"
      show-checkbox
      :node-key="nodeKey"
      :filter-node-method="filterNode"
      :default-expanded-keys="_expandedKeys"
      :default-checked-keys="checkedKeys"
      ref="tree"
      @check-change="checkChange"
    ></el-tree>
  </div>
</template>

<script>
export default {
  name: 'TreeSearch',
  components: {},
  props: {
    data: {
      type: Array,
      default: []
    },
    nodeKey: {
      type: String,
      default: 'id'
    },
    expandedKeys: {
      type: Array,
      default: () => {
        return []
      }
    },
    checkedKeys:{
      type: Array,
      default: () => {
        return []
      }
    },
    defaultProps: {
      type: Object,
      default: () => {
        return {
          children: 'children',
          label: 'label'
        }
      }
    }
  },
  computed: {
    _expandedKeys() {
      return this.expandedKeys.length ? this.expandedKeys : this.getAllKeys
    },
    getAllKeys() {
      let _arr = []
      let _this = this
      function getkeys(data, arr) {
        data.forEach(i => {
          arr.push(i[_this.nodeKey])
          if (i.children) {
            getkeys(i.children, arr)
          }
        })
      }
      let t = getkeys(_this.data, _arr)
      return _arr
    }
  },

  data: () => ({ filterText: '' }),
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    }
  },
  created() {},
  mounted() {},
  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data[this.defaultProps.label].indexOf(value) !== -1
    },
    checkChange(value) {
      let result = this.$refs.tree.getCheckedKeys()
      this.$emit('change', result)
    }
  }
}
</script>
<style lang="scss" scope>
</style>
