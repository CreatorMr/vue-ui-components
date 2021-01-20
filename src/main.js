import Vue from 'vue'
import App from './App.vue'

import MyUI from '../modules/my-ui'
// import {MyButton, MyInput } from '../modules/my-ui'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import TreeSearch from '../modules/my-ui/TreeSearch/index.js'
Vue.use(TreeSearch)
Vue.use(ElementUI);
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
