const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, './docs'),
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        data: `@import "@/global.scss";`
      }
    }
  }
}
