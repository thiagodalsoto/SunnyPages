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
      { text: '⚔Platform', link: '/article/supportp_platform' },  // 文件夹不指定则默认加载 index.md
      { text: 'Feedback', link: '/article/suggest_feedback' },
      {
        text: 'Docs', items: [
          { text: 'Development Experience', link: '/article/how_develop_it' },
          { text: 'Change Log', link: 'https://txc.qq.com/products/649489/change-log' },
          // { text: 'Wiki', link: 'https://github.com/XMuli/SunnyPages/wiki' },
        ],
      },
      // {
      //   text: 'More Product', items: [
      //     { text: 'QtExamples', link: 'https://github.com/XMuli/QtExamples' },
      //     { text: 'ThinkMate', link: 'https://thinkymate.com' },
      //     { text: 'ChineseChess', link: 'https://github.com/XMuli/ChineseChess' },
      //     { text: 'FLIPPED', link: 'https://flipped.xmuli.tech' },
      //     { text: 'ShotX', link: 'https://github.com/XMuli/shotx' },
      //   ]
      // },
      { text: 'Internalization', link: 'https://github.com/XMuli/SunnyPages/tree/master/translations' }
    ],

    sidebar: [
      {
        text: 'Catalogue',
        items: [
          { text: 'Download', link: 'https://github.com/XMuli/SunnyPages/releases' },
          { text: 'Feature', link: '/feature' },
          { text: 'Platform', link: '/article/supportp_platform' },
          { text: 'Feedback', link: '/article/suggest_feedback' },
          { text: 'Development Experience', link: '/article/how_develop_it' },
          { text: 'Acknowledgement', link: '/acknowledgement' },
        ]
      },
      {
        text: '目录',
        items: [
          { text: '官网下载', link: 'https://github.com/XMuli/SunnyPages/releases' },
          { text: '特色功能', link: '/feature' },
          { text: '架构平台', link: '/article/supportp_platform' },
          { text: '建议反馈', link: '/article/suggest_feedback' },
          { text: '开发经验', link: '/article/how_develop_it' },
          { text: '鸣    谢', link: '/acknowledgement' },
        ]
      }
    ],

    socialLinks: [
      // { icon: 'twitter', link: 'https://twitter.com/xmulite' },
      { icon: 'github', link: 'https://github.com/XMuli' },
      { icon: 'discord', link: 'https://discord.gg/4TQkfh79gN' },
    ],

    // footer: {
    // message: 'Copyright 2023-2024 XMuli',
    // copyright: 'Powered by <a href="https://vitepress.dev" target="_blank" rel="noopener">VitePress</a>'
    // }
  }
})
