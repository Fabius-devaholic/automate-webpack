var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: ['./src/scss/styles.scss', './src/js/scripts.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/scripts.js',
    publicPath: '/'
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
    new CopyWebpackPlugin([
      {
        from: './src/imgs',
        to: 'imgs'
      },
      {
        from: './src/fonts',
        to: 'fonts'
      }
    ], {
      copyUnmodified: true
    })
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map',
  // watch: true
};