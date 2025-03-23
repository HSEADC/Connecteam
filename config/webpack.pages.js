const HtmlWebpackPlugin = require('html-webpack-plugin');

function createPages(template, outputPath, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: `${outputPath}/index.html`,
    chunks: [...chunks, 'vendors']
  });
}

const htmlWebpackPlugins = [
  createPages('./src/index.html', '.', ['index', 'O_header', 'sticker']),
  createPages('./src/pages/articles/articles.html', 'articles', ['articles', 'O_header']),
  createPages('./src/pages/articles/short_article/short_article.html', 'articles/short_article', ['short_article', 'O_header', 'M_advice']),
  createPages('./src/pages/cases/cases.html', 'cases', ['cases', 'O_header']),
  createPages('./src/pages/interactives/interactives.html', 'interactives', ['interactives', 'O_header']),
  createPages('./src/pages/cases/case/case.html', 'cases/case', ['case', 'O_header', 'sticker']),
  createPages('./src/pages/articles/article/article.html', 'articles/article', ['article', 'O_header', 'sticker']),
  createPages('./src/pages/interactives/interactive_start/interactive_start.html', 'interactives/interactive_start', ['interactive_start', 'O_header', 'sticker']),
  createPages('./src/pages/styleguide/styleguide.html', 'styleguide', ['styleguide']),
  createPages('./src/pages/form/form.html', 'form', ['form']),
  createPages('./src/pages/articles/big_articles/ba_article_01/ba_article_01.html', 'articles/letsplay', ['ba_article_01', 'O_header', 'O_footer']),
  createPages('./src/pages/articles/short_articles/sa_article_01/sa_article_01.html', 'articles/colleguefriendship', ['ba_article_01', 'O_header', 'O_footer']),
  createPages('./src/pages/articles/super_short_articles/ssa_article_01.html', 'articles/deadlinecommunication', ['ba_article_01', 'O_header', 'O_footer'])
];

module.exports = htmlWebpackPlugins;
