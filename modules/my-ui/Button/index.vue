<template>
  <button :class="['my-btn', type]" @click="btnClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  components: {},
  props: {
    type: String
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    btnClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>
<style lang="scss" scope>
.my-btn {
  height: 30px;
  padding: 0 15px;
  border: 1px solid #ddd;
  background-color: #fff;
  &.primary {
    background-color: #145ece;
    border: 1px solid #ddd;
    color: #fff;
  }
  &.success {
    background-color: green;
    color: #fff;
    border: 1px solid #ddd;
  }
  &.danger {
    background-color: red;
    color: #fff;
  }
}
</style>
