import { defineConfig } from 'vitepress'
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
import vueJsx from "@vitejs/plugin-vue-jsx";
const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用',
      items: [
        { text: 'Button 按钮', link: '/components/button/' },
      ]
    }
  ]
}
const configs = {
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽
      md.use(demoblockPlugin)
    }
  },
  vite: {
    plugins: [
      demoblockVitePlugin(), 
      // 添加JSX插件
      vueJsx()
    ]
  }
}
export default defineConfig(configs)
