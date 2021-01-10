import Vue from 'vue'
import App from './App.vue'

import MyUI from '../modules/my-ui'
// import {MyButton, MyInput } from '../modules/my-ui'

Vue.use(MyUI, {
  components: [
    'MyButton',
    'MyInput'
  ]
})
// Vue.use(MyButton)
// Vue.use(MyInput)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
