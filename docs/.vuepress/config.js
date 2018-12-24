const path = require('path');

module.exports = {
  title: 'MS Design',
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
              ['/components/button', 'Button 按钮'],
              ['/components/icon', 'Icon 图标']
            ],
          },
          {
            title: 'Form 表单',
            collapsable: false,
            children: [
              ['/components/input', 'Input 输入框'],
              ['/components/radio', 'Radio 单选框'],
              ['/components/checkbox', 'Checkbox 复选框'],
              ['/components/toggle', 'Toggle 开关']
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
              ['/components/button', 'Button'],
              ['/components/icon', 'Icon']
            ]
          },
          {
            title: 'Form',
            collapsable: false,
            children: [
              ['/components/input', 'Input'],
              ['/components/radio', 'Radio'],
              ['/components/checkbox', 'Checkbox'],
              ['/components/toggle', 'Toggle']
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
