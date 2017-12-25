var path = require('path');
var webpack = require('webpack');

module.exports = {
  watch: true,
  entry: './src/js/scripts.js',
  output: {
    path: path.resolve(__dirname, 'built/js'),
    filename: 'scripts.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};