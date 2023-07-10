import { App } from "vue";
import MyButton from "./button";
import SFCButton from "./SFCButton.vue";
import SButton from "./SButton.vue";
import JSXButton from "./JSXButton";

// 导出单独组件
export { MyButton, SFCButton, JSXButton };


// 编写一个插件，实现一个install方法，实现组件库的完整引入
export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
    app.component(SButton.name, SButton);
  }
};
