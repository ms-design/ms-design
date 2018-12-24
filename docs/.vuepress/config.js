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
            title: '基础',
            collapsable: false,
            children: [['/components/button', 'Button 按钮']]
          },
          {
            title: '表单',
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
        sidebar: 'auto'
      }
    },
    repo: 'ms-design/ms-design',
    repoLabel: 'Github'
  }
};
