# `clean-before-html-webpack-plugin`

> 在html-webpack-plugin处理前，清理html里一些不必要的内容，如dev-server时引入的脚本

## Usage

```javascript
// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanBeforeHtmlWebpackPlugin = require('clean-before-html-webpack-plugin');

const isProd = process.env.NODE_ENV == 'production';

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './demo/index.html',
      filename: '[name].html',
      inject: 'body'
    })
  ].concat(isProd ? [
    new CleanBeforeHtmlWebpackPlugin({
      patterns: [{
        match: '<script src="../dist/demo/index.js"></script>',
        replacement: ''
      }]
    }),
  ]: []),
};
```