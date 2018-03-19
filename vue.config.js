const fs = require('fs');
module.exports = {
  css: {
    loaderOptions: {
      sass: {
          data: fs.readFileSync('src/scss/settings.scss', 'utf-8')
      }
    }
  }
};