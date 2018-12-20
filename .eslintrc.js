module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 最后一行禁止使用逗号
    'comma-dangle': ['error', 'never'],
    // 函数表达式不予许命名
    'func-names': ['error', 'never'],
    // 函数括号前不允许加空格
    'space-before-function-paren': ['error', 'never'],
    // 当箭头函数只有一个参数时允许省略圆括号
    'arrow-parens': ['error', 'as-needed'],
    // 立即执行函数表达式必须包裹function
    'wrap-iife': ['error', 'inside'],
    // resolver忽略webpack alias
    'import/no-unresolved': [
      'error',
      {
        ignore: ['@/']
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
