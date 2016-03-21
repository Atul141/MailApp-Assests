/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('webpack');

var assetPath = require('path').join(__dirname, 'dist');

module.exports = {

  output: {
    path: assetPath,
    filename: 'main.js',
    publicPath: '/public/'
  },

  cache: true,
  debug: true,
  devtool: 'sourcemap',
  entry: [
    'webpack-dev-server/client?http://localhost:9999',
    'webpack/hot/dev-server',
    './javascript/src/main.js'
  ],

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'styles': __dirname + '/src/styles',
      'components': __dirname + '/javascript/src/components/',
      'reducers': __dirname + '/javascript/src/reducers/',
      'actions': __dirname + '/javascript/src/actions/'
    }
  },
  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      exclude: [/node_modules/],
      loader: 'eslint'
    }],
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }, {
      test: /\.css$/,
      loader: "style/useable!css!autoprefixer"
    }, {
      test: /\.(png|jpg|woff|woff2|eot|svg|ttf|gif)$/,
      loader: 'url?limit=100000'
    }]
  },

  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __DEVTOOLS__: false // <-------- DISABLE redux-devtools HERE
    })
  ],

};
