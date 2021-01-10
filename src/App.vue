<template>
  <div id="app">
    <my-button type="danger" @click="btnClick">测试按钮</my-button>
  <br>
  <my-input v-model="input" placeholder="请输入内容" value="123"></my-input>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      input: '333'
    }
  },
  methods: {
    btnClick(e) {
      console.log(e)
      console.log('点击按钮')
    }
  }
}
</script>

<style lang="scss">

</style>
