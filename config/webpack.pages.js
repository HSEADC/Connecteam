const HtmlWebpackPlugin = require('html-webpack-plugin');

function createPages(template, outputPath, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: `${outputPath}/index.html`,
    chunks: [...chunks, 'vendors']
  });
}

const htmlWebpackPlugins = [
  createPages('./src/index.html', '.', ['index', 'header_white', 'sticker']),
  createPages('./src/pages/articles/articles.html', 'articles', ['articles', 'header_black']),
  createPages('./src/pages/cases/cases.html', 'cases', ['cases', 'header_black']),
  createPages('./src/pages/interactives/interactives.html', 'interactives', ['interactives', 'header_black']),
  createPages('./src/pages/cases/case/case.html', 'cases/case', ['case', 'header_black', 'sticker']),
  createPages('./src/pages/articles/article/article.html', 'articles/article', ['article', 'header_black', 'sticker']),
  createPages('./src/pages/interactives/interactive_start/interactive_start.html', 'interactives/interactive_start', ['interactive_start', 'header_black', 'sticker']),
  createPages('./src/pages/styleguide/styleguide.html', 'styleguide', ['styleguide']),
  createPages('./src/pages/form/form.html', 'form', ['form'])
];

module.exports = htmlWebpackPlugins;
