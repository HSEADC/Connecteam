const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const path = require('path');

function createPartialsPlugin(partialPath, location) {
  return new HtmlWebpackPartialsPlugin([
    {
      path: path.join(__dirname, partialPath),
      location: location,
      template_filename: '*',
      priority: 'replace'
    }
  ]);
}

const htmlWebpackPartialsPlugins = [
  createPartialsPlugin('../src/partials/header_white/header_white.html', 'header_white'),
  createPartialsPlugin('../src/partials/header_black/header_black.html', 'header_black'),
  createPartialsPlugin('../src/partials/footer/footer.html', 'footer'),
  createPartialsPlugin('../src/partials/C_social_media/C_social_media.html', 'social_media'),
  createPartialsPlugin('../src/partials/header_black_mobile/header_black_mobile.html', 'header_black_mobile'),
  createPartialsPlugin('../src/partials/header_white_mobile/header_white_mobile.html', 'header_white_mobile')

];

module.exports = htmlWebpackPartialsPlugins;
