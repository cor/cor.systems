const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  outputDir: path.resolve(__dirname, './docs'),
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'docs'),
        // Required - Routes to render.
        routes: [ '/', '/projects', '/contact' ]
      })
    ]
  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        data: `@import "@/global.scss";`
      }
    }
  }
}
