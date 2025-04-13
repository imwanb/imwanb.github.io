import { defineThemeConfig } from 'vuepress-theme-plume'
import notes from './notes/index.js'

export default defineThemeConfig({
  lang: 'zh-CN',
  blog: false,
  logo: '/images/logo.png',
  plot: true,
  social: [
    { icon: 'github', link: 'https://www.baidu.com/' },
    //{ icon: 'qq', link: 'https://qm.qq.com/q/sjTAOj8882' },
     ],
  navbarSocialInclude: ['github', 'qq', 'docs'],



  navbar: [
    { text: '首页', link: '/' },
    {
      text: '石化定额',
      items: [
        {
          text: '07安装定额',
          items: [
            {
              text: '编制说明', link: '/sinopec07/hjzr8m1f/'
            },
            {
              text: '章节说明', link: '/sinopec07/ms457w2l/'
            },
          ],
        },
        {
          text: '19安装定额',
          items: [
            {
              text: '编制说明', link: '/sinopec19/yh5385lr/'
            },
            {
              text: '章节说明', link: '/sinopec19/4pop6cta/'
            },
          ],
        },
        {
          text: '09安装定额',
          items: [
            {
              text: '编制说明', link: '/sinopec09/xg2ihb7u/'
            },
            {
              text: '章节说明', link: '/sinopec09/egf3nos4/'
            },
          ],
        },
        {
          text: '21安装定额',
          items: [
            {
              text: '编制说明', link: '/sinopec21/505slihb/'
            },
            {
              text: '章节说明', link: '/sinopec21/bktv59jv/'
            },
          ],
        },
      ],
    },
    { text: '定额交流', link: '/sinopecqa/3wnrazak/' },
    { text: '笔记', link: '/note/p5n6fniv/' }
    
    // 控制元素何时被激活
    //{
    //  text: 'Group 2',
      //items: [
        //{
          //text: 'Always active',
          //link: '/',
          // 该元素将一直处于激活状态
          //activeMatch: '/',
        //},
        //{
          //text: 'Active on /foo/',
          //link: '/not-foo/',
          // 该元素在当前路由路径是 /foo/ 开头时激活
          // 支持正则表达式
         // activeMatch: '^/foo/',
        //},
      //],
   // },
  ],



  sidebar: 'auto',
  notes,
  changelog: true,
  contributors: true,
  plugins: {
    git: process.env.NODE_ENV === 'production',
    markdownPower: {
      demo: false, // 启用新的代码演示功能
    },
    markdownEnhance: {
      demo: false, // 禁用旧的代码演示功能
    },
  },
  footer: { message: "", copyright: "© 2025 vanb" },
  //copyright: 'CC-BY-4.0',
})