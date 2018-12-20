module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  pages: {
    docs: {
      entry: 'docs/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  }
};
