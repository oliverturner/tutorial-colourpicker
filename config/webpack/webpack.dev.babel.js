import config from './config';

export default config({
  devtool:        'eval',
  preEntries:     ['react-hot-loader/patch'],
  localIdentName: '[path]-[local]-[hash:base64:5]'
});
