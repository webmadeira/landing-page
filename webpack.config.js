const path = require('path')

module.exports = paths => (
  {
    devtool: 'cheap-module-eval-source-map',
    entry: [paths.scriptIndex],
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/assets/',
      filename: 'bundle.js',
    },
    module: {
      loaders: [{
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      }],
    },
  }
)
