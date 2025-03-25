const HtmlWebpackPlugin = require('html-webpack-plugin');

function createPages(template, outputPath, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: `${outputPath}/index.html`,
    chunks: [...chunks, 'vendors']
  });
}

const htmlWebpackPlugins = [
  createPages('./src/index.html', '.', ['index', 'header', 'sticker']),
  createPages('./src/pages/articles/articles.html', 'articles', ['articles', 'header']),
  createPages('./src/pages/articles/short_article/short_article.html', 'articles/short_article', ['short_article', 'header', 'M_advice']),
  createPages('./src/pages/cases/cases.html', 'cases', ['cases', 'header']),
  createPages('./src/pages/interactives/interactives.html', 'interactives', ['interactives', 'header']),
  createPages('./src/pages/cases/case/case.html', 'cases/case', ['case', 'header', 'sticker']),
  createPages('./src/pages/articles/article/article.html', 'articles/article', ['article', 'header', 'sticker']),
  createPages('./src/pages/interactives/interactive_start/interactive_start.html', 'interactives/interactive_start', ['interactive_start', 'header', 'sticker']),
  createPages('./src/pages/styleguide/styleguide.html', 'styleguide', ['styleguide']),
  createPages('./src/pages/form/form.html', 'form', ['form']),
  createPages('./src/pages/articles/big_articles/ba_article_01.html', 'articles/letsplay', ['ba_article', 'header', 'O_footer']),
  createPages('./src/pages/articles/big_articles/ba_article_02.html', 'articles/teampsychologymotivation', ['ba_article', 'header', 'O_footer']),
  createPages('./src/pages/articles/big_articles/ba_article_03.html', 'articles/feedback', ['ba_article', 'header', 'O_footer']),
  createPages('./src/pages/articles/big_articles/ba_article_04.html', 'articles/trustrole', ['ba_article', 'header', 'O_footer']),
  createPages('./src/pages/articles/big_articles/ba_article_05.html', 'articles/waltercommunication', ['ba_article', 'header', 'O_footer']),
  createPages('./src/pages/articles/big_articles/ba_article_06.html', 'articles/magictablet', ['ba_article', 'header', 'O_footer']),
  createPages('./src/pages/articles/big_articles/ba_article_07.html', 'articles/diagnostictools', ['ba_article', 'header', 'O_footer']),
  createPages('./src/pages/articles/big_articles/ba_article_08.html', 'articles/roleteambuilding', ['ba_article', 'header', 'O_footer']),
  createPages('./src/pages/articles/big_articles/ba_article_09.html', 'articles/meetingtypes', ['ba_article', 'header', 'O_footer']),
  createPages('./src/pages/articles/short_articles/sa_article_01.html', 'articles/colleguefriendship', ['sa_article', 'header', 'O_footer']),
  createPages('./src/pages/articles/short_articles/sa_article_02.html', 'articles/technicaljargon', ['sa_article', 'header', 'O_footer']),
  createPages('./src/pages/articles/short_articles/sa_article_03.html', 'articles/developerscoworking', ['sa_article', 'header', 'O_footer']),
  createPages('./src/pages/articles/short_articles/sa_article_04.html', 'articles/qadeveloperscommunication', ['sa_article', 'header', 'O_footer']),
  createPages('./src/pages/articles/short_articles/sa_article_05.html', 'articles/problemtemplates', ['sa_article', 'header', 'O_footer']),
  createPages('./src/pages/articles/short_articles/sa_article_06.html', 'articles/departmentscoldwar', ['sa_article', 'header', 'O_footer']),
  createPages('./src/pages/articles/short_articles/sa_article_07.html', 'articles/mediator', ['sa_article', 'header', 'O_footer']),
  createPages('./src/pages/articles/super_short_articles/ssa_article_01.html', 'articles/deadlinecommunication', ['ssa_article', 'header', 'O_footer']),
  createPages('./src/pages/articles/super_short_articles/ssa_article_02.html', 'articles/jobfriendship', ['ssa_article', 'header', 'O_footer']),
  createPages('./src/pages/articles/super_short_articles/ssa_article_03.html', 'articles/newcommandmembers', ['ssa_article', 'header', 'O_footer']),
  createPages('./src/pages/articles/super_short_articles/ssa_article_04.html', 'articles/whoareyou', ['ssa_article', 'header', 'O_footer']),
  createPages('./src/pages/articles/super_short_articles/ssa_article_05.html', 'articles/teamconflict', ['ssa_article', 'header', 'O_footer']),
  createPages('./src/pages/articles/super_short_articles/ssa_article_06.html', 'articles/teammotivation', ['ssa_article', 'header', 'O_footer']),
  createPages('./src/pages/articles/super_short_articles/ssa_article_07.html', 'articles/newteamworking', ['ssa_article', 'header', 'O_footer']),
  createPages('./src/pages/articles/super_short_articles/ssa_article_08.html', 'articles/streamworking', ['ssa_article', 'header', 'O_footer']),
  createPages('./src/pages/articles/super_short_articles/ssa_article_09.html', 'articles/collegueargue', ['ssa_article', 'header', 'O_footer']),
  createPages('./src/pages/articles/super_short_articles/ssa_article_10.html', 'articles/designcodecommunication', ['ssa_article', 'header', 'O_footer']),
  createPages('./src/pages/articles/super_short_articles/ssa_article_11.html', 'articles/burnout', ['ssa_article', 'header', 'O_footer']),
  createPages('./src/pages/articles/super_short_articles/ssa_article_12.html', 'articles/endlessrallies', ['ssa_article', 'header', 'O_footer']),
  createPages('./src/pages/tests/test_01.html', 'tests/1', ['test_01', 'header', 'O_footer']),
];

module.exports = htmlWebpackPlugins;
