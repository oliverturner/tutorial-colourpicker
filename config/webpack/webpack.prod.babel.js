import webpack                       from 'webpack';
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin';
import ExtractTextPlugin             from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin             from 'html-webpack-plugin';
import OfflinePlugin                 from 'offline-plugin';

import config from './config';
import pkg    from '../../package.json';

export default config({
  production: true,

  localIdentName: '[hash:base64]',

  output: {
    path:       './dist',
    publicPath: '',
    filename:   'app.[hash].js'
  },

  plugins: [
    new LodashModuleReplacementPlugin,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin,
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('app.[hash].css'),
    new HtmlWebpackPlugin({
      template: './config/tmplate.html',
      title:    pkg.description,
      minify:   {
        removeComments:                true,
        collapseWhitespace:            true,
        removeRedundantAttributes:     true,
        useShortDoctype:               true,
        removeEmptyAttributes:         true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash:              true,
        minifyJS:                      true,
        minifyCSS:                     true,
        minifyURLs:                    true
      }
    }),
    new OfflinePlugin({
      scope:          '/',
      caches:         'all',
      updateStrategy: 'all',
      version:        'v1',
      ServiceWorker:  {output: 'sw.js'},
      AppCache:       false
    })
  ]
});
