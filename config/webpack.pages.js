const HtmlWebpackPlugin = require('html-webpack-plugin');

function createPages(template, outputPath, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: `${outputPath}/index.html`,
    chunks: [...chunks, 'vendors']
  });
}

const htmlWebpackPlugins = [
  createPages('./src/index.html', '.', ['index', 'header_about']),
  createPages('./src/pages/articles/articles.html', 'articles', ['articles']),
  createPages('./src/pages/cases/cases.html', 'cases', ['cases']),
  createPages('./src/pages/interactives/interactives.html', 'interactives', ['interactives']),
  createPages('./src/pages/articles/waterfall/waterfall.html', 'articles/waterfall', ['waterfall', 'header_black']),
  createPages('./src/pages/form/form.html', 'form', ['form', 'header_about'])
];

module.exports = htmlWebpackPlugins;
