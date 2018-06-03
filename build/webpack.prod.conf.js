'use strict'

const webpack             = require('webpack')
const path                = require('path')
const ExtractTextPlugin   = require('extract-text-webpack-plugin')
const UglifyJsPlugin      = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin  = require('clean-webpack-plugin')


module.exports = {
  entry: [
    './src/scripts/main.js',
    './src/styles/main.scss'
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'scripts/[name].js'
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                minimize: true
              }
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
      {
        enforce: 'pre',
        test: /\.(jpe?g|png|gif|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'image-webpack-loader',
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            // options: {
            //   name: 'assets/[name].[ext]?[hash]'
            // }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([
      'scripts/*.*',
      'styles/*.*',
    ], {
      root: path.resolve(__dirname, '../dist'),
      verbose: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': "'production'" // <-- note the double AND single quotes!!
    }),
    new ExtractTextPlugin({ // define where to save the file
      filename: 'styles/[name].css',
      allChunks: true,
    }),
    new UglifyJsPlugin({
      parallel: true
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: Infinity
    // }),
  ],
  externals: {
    $: 'jquery',
    jQuery: 'jquery'
  }
}
