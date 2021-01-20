<template>
  <div id="app">
    <my-button type="danger" @click="btnClick">测试按钮</my-button>
    <br />
    <my-input v-model="input" placeholder="请输入内容" value="123"></my-input>
    <el-button type="text">d</el-button>

    <tree-search :data="data" @change="change" nodeKey="skuId" :defaultProps="{children: 'son', label: 'name'}"></tree-search>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      input: '333',
      data: [
        {
          skuId: 1,
          name: '一级 2',
          son: [
            {
              skuId: 3,
              name: '二级 2-1',
              son: [
                {
                  skuId: 4,
                  name: '三级 3-1-1'
                },
                {
                  skuId: 5,
                  name: '三级 3-1-2',
                  // disabled: true
                }
              ]
            },
            {
              skuId: 2,
              name: '二级 2-2',
              // disabled: true,
              son: [
                {
                  skuId: 6,
                  name: '三级 3-2-1'
                },
                {
                  skuId: 7,
                  name: '三级 3-2-2',
                  // disabled: true
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    btnClick(e) {
      console.log(e)
      console.log('点击按钮')
    },
    change(val) {
      console.log('change: emit', val)
    }
  }
}
</script>

<style lang="scss">
</style>
