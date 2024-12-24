const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const ThreeMinifierPlugin = require('@yushijinhun/three-minifier-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const htmlWebpackPlugins = require('./webpack.pages')
const htmlWebpackPartialsPlugins = require('./webpack.partials')

const webpack = require('webpack')
const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    articles: './src/pages/articles/articles.js',
    cases: './src/pages/cases/cases.js',
    interactives: './src/pages/interactives/interactives.js',
    article: './src/pages/articles/article/article.js',
    form: './src/pages/form/form.js',
    case: './src/pages/cases/case/case.js',
    interactive_start: './src/pages/interactives/interactive_start/interactive_start.js',
    sticker: './src/partials/A_sticker/A_sticker.js',

    header_white: './src/partials/header_white/header_white.js',
    header_black: './src/partials/header_black/header_black.js'
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
        test: /\.(svg|gif|webp)/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      }
    ]
  },
  plugins: [
    ...htmlWebpackPlugins,
    ...htmlWebpackPartialsPlugins,
    new webpack.HotModuleReplacementPlugin(),
    new ThreeMinifierPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: 'src/images', 
          to: 'images' }
      ],
    }),
    new FaviconsWebpackPlugin({
      logo: './src/images/favicon.png',
      cache: true,
      mode: 'webapp',
    }),
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