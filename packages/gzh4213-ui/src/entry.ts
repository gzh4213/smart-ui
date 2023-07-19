import { type App } from 'vue'
// import MyButton from './button'
import { SButton } from './Button'

// 导出单独组件
export { SButton }

// 编写一个插件，实现一个install方法，实现组件库的完整引入
export default {
  install (app: App): void {
    app.component(SButton.name, SButton)
  }
}
