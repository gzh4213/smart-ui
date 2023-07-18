// import Theme from 'vitepress/dist/client/theme-default/index.js'
import Theme from 'vitepress/theme'
import SmartyUI from '@tf/tf-c-ui'
import '@tf/tf-c-ui/dist/entry.css'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'

export default {
  ...Theme,
  enhanceApp(ctx) {
    Theme.enhanceApp(ctx)
    ctx.app.use(SmartyUI)
    useComponents(ctx.app)
  },
}
