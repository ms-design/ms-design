const path = require('path');

module.exports = {
  title: 'MS Design',
  ga: 'UA-89371431-5',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      description: '基于微软Fluent Design设计的Vue组件库'
    },
    '/en/': {
      lang: 'en-US',
      description: "Vue components that implement Microsoft's Fluent Design"
    }
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        sidebar: [
          {
            title: 'Basic 基础',
            collapsable: false,
            children: [
              '/components/button.md',
              '/components/icon.md',
            ]
          },
          {
            title: 'Form 表单',
            collapsable: false,
            children: [
              '/components/input.md',
              '/components/radio.md',
              '/components/checkbox.md',
              '/components/toggle.md',
            ]
          }
        ]
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        sidebar: [
          {
            title: 'Basic',
            collapsable: false,
            children: [
              '/components/button.md',
              '/components/icon.md',
            ]
          },
          {
            title: 'Form',
            collapsable: false,
            children: [
              '/components/input.md',
              '/components/radio.md',
              '/components/checkbox.md',
              '/components/toggle.md',
            ]
          }
        ]
      }
    },
    search: false,
    repo: 'ms-design/ms-design',
    repoLabel: 'Github'
  },
  chainWebpack: (config, isServer) => {
    config.resolve.alias.set('@', path.resolve(__dirname, '../../src'))
  }
};
