const path = require('path');

module.exports = {
  title: 'MS Design',
  plugins: [
    [
      '@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
          '/': {
            message: '发现新内容可用',
            buttonText: '刷新'
          },
          '/en/': {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        }
      }
    ],
    [
      '@vuepress/google-analytics', {
        ga: 'UA-89371431-5'
      }
    ],
    ['@vuepress/back-to-top']
  ],
  head: [
    [
      'link', {
        rel: 'icon',
        href: '/logo.png'
      }
    ],
    [
      'link', {
        rel: 'manifest',
        href: '/manifest.json'
      }
    ]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      description: '基于微软设计语言的Vue组件库'
    },
    '/en/': {
      lang: 'en-US',
      description: 'Vue components that implement Microsoft Design Language'
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
            children: ['/components/button.md', '/components/icon.md']
          }, {
            title: 'Form 表单',
            collapsable: false,
            children: [
              '/components/input.md',
              '/components/radio.md',
              '/components/checkbox.md',
              '/components/select.md',
              '/components/toggle.md',
              '/components/slider.md'
            ]
          }, {
            title: 'View 视图',
            collapsable: false,
            children: [
              '/components/tooltip.md'
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
            children: ['/components/button.md', '/components/icon.md']
          }, {
            title: 'Form',
            collapsable: false,
            children: [
              '/components/input.md',
              '/components/radio.md',
              '/components/checkbox.md',
              '/components/select.md',
              '/components/toggle.md',
              '/components/slider.md'
            ]
          }, {
            title: 'View',
            collapsable: false,
            children: [
              '/components/tooltip.md'
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
    config.resolve.alias.set('@', path.resolve(__dirname, '../../src'));
  }
};
