import HtmlWebpackPlugin from 'html-webpack-plugin';

import config from './config';
import pkg    from '../../package.json';

export default config({
  devtool: 'eval',

  entry: ['react-hot-loader/patch'],

  localIdentName: '[path]-[local]-[hash:base64:5]',

  output: {
    path:       './public',
    publicPath: '/',
    filename:   'app.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title:    pkg.description,
      template: './config/tmplate.html'
    })
  ]
});
