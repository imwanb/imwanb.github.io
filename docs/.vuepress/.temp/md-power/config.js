import { defineClientConfig } from 'vuepress/client'
import Tabs from '/Users/wanb/Desktop/GitHub/imwanb.github.io/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from '/Users/wanb/Desktop/GitHub/imwanb.github.io/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from '/Users/wanb/Desktop/GitHub/imwanb.github.io/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeItem from '/Users/wanb/Desktop/GitHub/imwanb.github.io/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeItem.vue'

import '/Users/wanb/Desktop/GitHub/imwanb.github.io/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeItem', FileTreeItem)
  }
})
