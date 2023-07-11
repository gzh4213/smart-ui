/* eslint-env node */ //此行注释为屏蔽Eslint检查

module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  globals: {
    ga: true,
    chrome: true,
    __DEV__: true
  },
  plugins: ['prettier'],
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier'
  ],
  rules: {
    // 单引号限制
    quotes: ['error', 'single'],
    // 禁用console
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
};

