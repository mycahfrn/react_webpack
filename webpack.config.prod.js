const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].bundle.[hash].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin()
  ],
  mode: 'production'
});