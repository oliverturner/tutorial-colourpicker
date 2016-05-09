import path from 'path';

import config from './config';

export default config({
  devtool: 'inline-source-map',

  moduleLoaders: [
    {
      test:    /\.jsx?$/,
      loader:  'babel',
      include: path.resolve(process.cwd(), 'src')
    },
    {
      test:   /\.p?css$/,
      loader: 'null'
    },
    {
      test:   /\.json$/,
      loader: 'json'
    }
  ],

  externals: {
    'react/addons':                   true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext':         true
  }
});
