<template>
  <input class="my-input" type="text" :value="value" :placeholder="placeholder">
</template>

<script>
export default {
  name: 'MyInput',
  components: {},
  props: {
    placeholder: String,
    value: String
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}

</script>
<style lang"scss">
.my-input{
height: 34px;
border: 1px solid #ddd;
background-color: #fff;

}
</style>
