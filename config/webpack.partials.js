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
  createPartialsPlugin('../src/partials/header_main/header_main.html', 'header_main'),
  createPartialsPlugin('../src/partials/header_about/header_about.html', 'header_about'),
  createPartialsPlugin('../src/partials/footer/footer.html', 'footer'),
  createPartialsPlugin('../src/partials/C_social_media/C_social_media.html', 'social_media'),
  createPartialsPlugin('../src/partials/header_main_mobile/header_main_mobile.html', 'header_main_mobile')
];

module.exports = htmlWebpackPartialsPlugins;
