import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  // 请不要忘记设置默认语言
  blog: false,
  lang: 'zh-CN',
  head: [
    [
        'link', { rel: 'icon', href: '/images/logo.png' },
    ]
  ],
  locales: {
    '/': { lang: 'zh-CN', title: 'Docs' }
  },
  theme: plumeTheme({
    hostname: 'http://docs.cuute.cn',
    docsRepo: 'https://github.com/imanb',
    docsBranch: 'master',
    docsDir: 'docs',
    encrypt: {
      //global: true,
      //admin: ['123456'],
      rules: {
        // 可以是 md 文件的相对路径，对该文件加密
        'sinopecqa\定额学习.md': '123456',
        // 可以是 文件夹的路径，对该目录下所有文章加密
        //'/notes/vip/': '23456',
        // 可以是 访问地址的请求路径，对该访问路径下所有文章加密
        //'/vuepress-theme-plume/': '123456',
        // 可以是 具体的某个页面的请求路径，对该页面加密
        //'/article/f8dnci3/': '123456',
        // 如果是 `^` 开头，则匹配该正则表达式的页面也会加密
        //'^/(a|b)/': '123456',
      }
    },
    plugins: {
      shiki: {
        languages: ['yaml', 'python', 'shell', 'json'],
      },

      markdownPower: {
        imageSize: 'all', // 'local' | 'all'
        plot: true,
      },
    }
  }),
  bundler: viteBundler(),
})
