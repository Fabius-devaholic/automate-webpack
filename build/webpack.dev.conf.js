'use strict'

const webpack           = require('webpack')
const path              = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const StyleLintPlugin   = require('stylelint-webpack-plugin')
const DashboardPlugin   = require('webpack-dashboard/plugin')


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
                importLoaders: 1
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
        test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            // options: {
            //   name: 'assets/[name].[ext]?[hash]'
            // }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': "'development'" // <-- note the double AND single quotes!!
    }),
    new ExtractTextPlugin({ // define where to save the file
      filename: 'styles/[name].css',
      allChunks: true,
    }),
    new StyleLintPlugin(),
    new DashboardPlugin({
      minified: false,
      gzip: false
    })
  ],
  resolve: {},
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: {
      warnings: true,
      errors: true
    },
    host: '0.0.0.0',
    port: 8000,
    open: true,
    // contentBase: path.resolve(__dirname, '../dist'),
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
}
