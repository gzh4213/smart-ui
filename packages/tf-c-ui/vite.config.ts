import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
// import { presetUno, presetAttributify, presetIcons } from 'unocss'
// import Unocss from 'unocss/vite'
import viteEslint from 'vite-plugin-eslint'

// console.log(resolve(__dirname, './src/index.ts'), 'ts')
// https://vitejs.dev/config/
const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    exports: 'named',
    globals: {
      vue: 'Vue'
    }
  }
}

export default defineConfig({
  plugins: [
    // vue模板编译插件
    vue(),
    // 添加JSX插件
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    // 添加UnoCSS插件
    // Unocss({
    //   presets: [presetUno(), presetAttributify(), presetIcons()]
    // }),
    viteEslint()
  ],

  // 添加库模式配置
  build: {
    rollupOptions,
    // 代码压缩 boolean | 'terser' | 'esbuild'
    minify: 'terser',
    cssCodeSplit: true,
    // 输出单独 source文件
    sourcemap: true,
    // 生成压缩大小报告
    brotliSize: true,
    lib: {
      entry: resolve(__dirname, './src/entry.ts'),
      name: 'SmartyUI',
      fileName: 'smarty-ui',
      // 导出模块格式
      formats: ['es', 'umd', 'iife']
    }
  }
})