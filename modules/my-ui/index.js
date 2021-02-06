import Button from './Button/index.vue';
import Input from './Input/index.vue'
// import TreeSearch from './TreeSearch/index.vue'
import DatePicker from './Date-picker/index.vue'
const MyUI = {}

const
  COMPONENTS = [
    Button,
    Input,
    // TreeSearch,
    DatePicker
  ]

const MyButton = {}
const MyInput = {}
MyButton.install = Vue => Vue.component(Button.name, Button)
MyInput.install = Vue => Vue.component(Input.name, Input)
// 实现按需注册加载的方式
export {
  MyButton, MyInput
}
// 全部加载
MyUI.install = function (Vue, options) {
  // console.log(options)
  // Vue.compontents(MyButton.name, MyButton)
  // Vue.directive
  // Vue.mixin
  // Vue.prototype.$http = function () {}
  if (options && options.components) {
    const components = options.components
    components.forEach(componentName => {
      COMPONENTS.forEach(component => {
        if (componentName === component.name) {
          Vue.component(component.name, component)
        }
      })
    });
  } else {
    COMPONENTS.forEach(component => {
      Vue.component(component.name, component
      )
    })
  }
}

export default MyUI;