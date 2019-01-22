const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/' // public URL of the output directory when referenced in a browser
  },
  module: {
    rules: [
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
        hash: true,
        filename: 'index.html',
        template: "./src/index.html",
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};