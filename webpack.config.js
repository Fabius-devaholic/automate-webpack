var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  watch: true,
  entry: ['./src/scss/styles.scss', './src/js/scripts.js'],
  output: {
    path: path.resolve(__dirname, 'built'),
    filename: 'js/scripts.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'css/styles.css',
      allChunks: true,
    }),
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map'
};