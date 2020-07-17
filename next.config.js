const withCss = require("@zeit/next-css");
const withSass = require('@zeit/next-sass')
const withLess = require('@zeit/next-less')
const path = require('path')


module.exports = {...withCss(
  withSass({
    // cssModules: true,
    // ...withLess({
    //   lessLoaderOptions: {
    //     javascriptEnabled: true,
    //   }
    // })
  })
),
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
