const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './index.js',
    analytics: './js/analytics'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\ttf|woff|woff2|eot/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
  })
  ]
}
