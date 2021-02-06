<template>
  <div v-click-outside>
    <input type="text" :value="formatDate" />
    <div class="pannel" v-if="isVisible">
      <div class="pannel-nav">
        
      </div>
      <div class="pannel-content">

      </div>
      <div class="pannel-footer"></div>
    </div>
  </div>
</template>

<script>
import { getYearMonthDay } from '../../utils/index.js'
export default {
  name: 'DatePicker',
  directives: {
    clickOutside: {
      // 指令声明周期
      bind(el, bindings, vnode) {
        // context
        // 把事件绑定到document上 看一下点击的是否是当前这个元素内部
        let handler = (e) => {
          if (el.contains(e.target)) {
            // 原生dom 操作方法
            // 判断当前面板已经显示出来了
            if (!vnode.context.isVisible) {
              vnode.context.focus()
            }
          } else {
            if (vnode.context.isVisible) {
              vnode.context.blur()
            }
          }
        }
        el.handler = handler
        document.addEventListener('click', handler, false)
      },
      unbind(el) {
        document.removeEventListener('click', el.handler)
      },
    },
  },
  components: {},
  props: {
    value: {
      type: Date,
      default: () => new Date(),
    },
  },
  data() {
    return {
      isVisible: false,
    }
  },
  computed: {
    formatDate() {
      return getYearMonthDay(this.value) // getFullYear getMonth getDate
    },
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 这样写不靠谱
    focus() {
      this.isVisible = true
    },
    blur() {
      this.isVisible = false
    },
  },
}
</script>
<style>
</style>
