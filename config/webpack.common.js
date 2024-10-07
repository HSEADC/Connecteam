const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const ThreeMinifierPlugin = require('@yushijinhun/three-minifier-webpack');

const htmlWebpackPlugins = require('./webpack.pages')
const htmlWebpackPartialsPlugins = require('./webpack.partials')

const webpack = require('webpack')
const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    articles: './src/pages/articles/articles.js',
    about: './src/pages/about/about.js',
    cases: './src/pages/cases/cases.js',
    interactives: './src/pages/interactives/interactives.js',
    scrum: './src/pages/articles/scrum/scrum.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve('.', 'docs'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'],
            cacheDirectory: true
          }
        }
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|svg|jpg|jpeg)/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    ...htmlWebpackPlugins,
    ...htmlWebpackPartialsPlugins,
    new webpack.HotModuleReplacementPlugin(),
    new ThreeMinifierPlugin()
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
      },
    },
  }
}