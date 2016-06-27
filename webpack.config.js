const cssnext = require('postcss-cssnext');
const precss = require('precss');
const path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: './dist',
    filename: 'index.js',
  },
  devServer: {
    inline: true,
    port: 3000,
    contentBase: '.',
    publicPath: './dist',
    filename: 'index.js'
  },
  extensions: [
    "", ".js", ".jsx",
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      }
    ],
  },
  postcss: function() {
    return [
      precss,
      cssnext
    ];
  }
}
