/* eslint disabled */
console.log(process.env)
// husky install
if (!(process.env.npm_execpath || '').includes('pnpm')) {
  console.log('请使用pnpm安装依赖！！！')
  console.warn(
    '\u001b[33mThis repository requires using pnpm as the package manager ' +
      ' for scripts to work properly.\u001b[39m\n'
  )
  process.exit(1)
}
