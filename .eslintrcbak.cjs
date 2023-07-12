/* eslint-env node */ // 此行注释为屏蔽Eslint检查
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  globals: {
    ga: true,
    chrome: true,
    __DEV__: true
  },
  plugins: ['vue'],
  extends: [
    'standard',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    // 单引号限制
    quotes: ['error', 'single'],
    // 禁用console
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
