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
    short_article: './src/pages/articles/short_article/short_article.js',
    form: './src/pages/form/form.js',
    case: './src/pages/cases/case/case.js',
    interactive_start: './src/pages/interactives/interactive_start/interactive_start.js',
    sticker: './src/partials/A_sticker/A_sticker.js',
    styleguide: './src/pages/styleguide/styleguide.js',
    ba_article: './src/pages/articles/big_articles/ba_article.js',
    sa_article: './src/pages/articles/short_articles/sa_article.js',
    ssa_article: './src/pages/articles/super_short_articles/ssa_article.js',
    test_01: './src/pages/tests/test_01.js',
    header: './src/partials/O_header/O_header.js',
    error_404: './src/pages/errors/404.js',
    error_500: './src/pages/errors/500.js',
    error_505: './src/pages/errors/505.js',
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
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, "../src/partials/analytics.html"),
        location: "analytics",
        template_filename: "*",
        priority: "replace",
      },
    ]),
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