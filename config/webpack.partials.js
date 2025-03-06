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
  createPartialsPlugin('../src/partials/O_footer/O_footer.html', 'O_footer'),
  createPartialsPlugin('../src/partials/O_header/O_header.html', 'O_header'),
  createPartialsPlugin('../src/partials/C_social_media/C_social_media.html', 'social_media'),
];

module.exports = htmlWebpackPartialsPlugins;
