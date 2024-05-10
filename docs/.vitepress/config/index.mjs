import { defineConfig } from 'vitepress'


export default defineConfig({
  title: "Sunny Screenshot",
  description: "Sunny Screenshot / Pinning / OCR / Image Translation / Capture / Linux / 截图 / 推荐", // seo 的优化
  // base: '/SunnyPages/',    // https://xmuli.tech/SunnyPages 且去掉 CNAME 文件后
  base: '/',                  // https://sunny.xmuli.tech 和 CNAME 文件
  head: [['link', { rel: 'icon', href: 'images/favicon.ico' }]],

  locales: {
    root: {
      selectText: 'Languages',
      label: 'English',
      lang: 'en-US',
      link: '/'
    },
    zh: {
      selectText: '选择语言',
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/'
    }
  },

  themeConfig: {
    siteTitle: 'Sunny',                 // 站点标题
    logo: '/images/logo/logo.svg',      // 站点 logo

    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Document', items: [
          { text: 'Change Log', link: 'https://txc.qq.com/products/649489/change-log' },
          { text: 'Suggest & Feedback', link: 'https://txc.qq.com/products/649489' },
          { text: 'Wiki', link: 'https://github.com/XMuli/SunnyPages/wiki' },
          { text: 'Develop', link: '/article/' },  // 文件夹则默认加载 index.md 文件
        ]
      },
      {
        text: 'More Product', items: [
          { text: 'QtExamples', link: 'https://github.com/XMuli/QtExamples' },
          { text: 'ThinkMate', link: 'https://thinkymate.com' },
          { text: 'ChineseChess', link: 'https://github.com/XMuli/ChineseChess' },
          { text: 'FLIPPED', link: 'https://flipped.xmuli.tech' },
          { text: 'ShotX', link: 'https://github.com/XMuli/shotx' },
        ]
      },
      { text: 'Internalization', link: 'https://github.com/XMuli/SunnyPages/tree/master/translations' }
    ],

    // nav: [
    //   { text: '首页', link: '/' },
    //   { text: '札记', link: '/develop/' },  // 文件夹则默认加载 index.md 文件
    //   { text: '日志', link: 'https://txc.qq.com/products/649489/change-log' },
    //   { text: '建议 & 反馈', link: 'https://txc.qq.com/products/649489' },
    //   {
    //     text: '作品', items: [
    //       { text: 'QtExamples 系列教程', link: 'https://github.com/XMuli/QtExamples' },
    //       { text: 'ThinkMate AI 客户端', link: 'https://thinkymate.com' },
    //       { text: 'ShotX 截图', link: 'https://github.com/XMuli/shotx' },
    //       { text: 'FLIPPED 截图', link: 'https://flipped.xmuli.tech' },
    //       { text: 'ChineseChess 中国象棋', link: 'https://github.com/XMuli/ChineseChess' }
    //     ]
    //   },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ]

    sidebar: [
      {
        text: 'Catalogue',
        items: [
          { text: 'Feature', link: '/article/feature' },
          { text: 'Acknowledgement', link: '/article/acknowledgement' },
          { text: 'Development experience', link: '/article/index' },
        ]
      },
      {
        text: '目录',
        items: [
          { text: '功能', link: '/article/feature_zh' },
          { text: '鸣谢', link: '/article/acknowledgement_zh' },
          { text: '开发', link: '/article/index' },
        ]
      }
    ],

    socialLinks: [
      // { icon: 'twitter', link: 'https://twitter.com/xmulite' },
      { icon: 'github', link: 'https://github.com/XMuli' },
    ],

    // footer: {
    // message: 'Copyright 2023-2024 XMuli',
    // copyright: 'Powered by <a href="https://vitepress.dev" target="_blank" rel="noopener">VitePress</a>'
    // }
  }
})
