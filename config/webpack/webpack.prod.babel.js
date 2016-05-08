import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import config from './config';

export default config({
  production: true,

  localIdentName: '[hash:base64]',

  output: {
    path:       './dist',
    publicPath: '',
    filename:   'app.[hash].js'
  },

  plugins: [
    // Important to keep React file size down
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('app.[hash].css'),
    new OfflinePlugin({
      scope:          '/',
      caches:         'all',
      updateStrategy: 'all',
      version:        'v1',
      ServiceWorker:  {output: 'sw.js'},
      AppCache:       false
    }),
    new HtmlWebpackPlugin({
      template: './config/tmplate.html',
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
      },

      production: true
    })
  ]
});
