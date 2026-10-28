import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Aloer Pages',
  description: '个人源码分享、开发记录与实用工具',
  lang: 'zh-CN',
  base: '/',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#0a0a0a' }],
  ],

  themeConfig: {
    logo: false,
    siteTitle: 'Aloer Pages',
    appearance: 'dark',

    nav: [
      { text: '博客介绍', link: '/intro/overview' },
      { text: '搭建记录', link: '/intro/deployment' },
      { text: '阅读指南', link: '/intro/usage' },
    ],

    sidebar: {
      '/intro/': [
        {
          text: 'Aloer Pages',
          items: [
            { text: '关于博客', link: '/intro/overview' },
            { text: '搭建记录', link: '/intro/deployment' },
            { text: '内容整理', link: '/intro/configuration' },
            { text: '阅读指南', link: '/intro/usage' },
            { text: '分享原则', link: '/intro/legal' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/raquelhuss/Aloer-pages' }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '未找到结果',
            resetButtonTitle: '清除',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },

    darkModeSwitchLabel: '主题切换',
    lightModeSwitchTitle: '切换到亮色模式',
    darkModeSwitchTitle: '切换到暗色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    langMenuLabel: '语言',

    footer: {
      message: '个人源码分享与开发记录',
      copyright: `© ${new Date().getFullYear()} Aloer Pages`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新'
    }
  },

  markdown: {
    theme: { light: 'github-dark', dark: 'github-dark' },
    lineNumbers: true,
  }
})
