import path              from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import pcssFocus         from 'postcss-focus';
import pcssNested        from 'postcss-nested';
import pcssReporter      from 'postcss-reporter';

const extractForProduction = (loaders) =>
  ExtractTextPlugin.extract('style', loaders.substr(loaders.indexOf('!')));


function makeConfig (options) {
  let cssLoaders = `style!css?module&localIdentName=${options.localIdentName}!postcss`;

  if (options.production) {
    cssLoaders = extractForProduction(cssLoaders);
  }

  const entries = options.entry || [];

  return {
    entry: [
      'sanitize.css/lib/sanitize.css',
      ...entries,
      './src/index.js'
    ],

    debug:   !options.production,
    devtool: options.devtool,

    output: options.output,

    module: {
      preLoaders: [],
      loaders:    [
        {
          test:    /\.jsx?$/,
          loaders: ['babel'],
          include: path.join(process.cwd(), 'src')
        },
        {
          test:   /\.p?css$/,
          loader: cssLoaders
        },
        {
          test:   /\.png$/,
          loader: 'url?limit=100000&mimetype=image/png',
        },
        {
          test:   /\.svg$/,
          loader: 'url?limit=100000&mimetype=image/svg+xml',
        },
        {
          test:   /\.gif$/,
          loader: 'url?limit=100000&mimetype=image/gif',
        },
        {
          test:   /\.jpg$/,
          loader: 'file'
        }
      ]
    },

    resolve: {
      modulesDirectories: ['src', 'node_modules'],
      extensions:         ['', '.js', '.jsx']
    },

    plugins: options.plugins,

    postcss: [
      pcssFocus,
      pcssNested,
      pcssReporter({clearMessages: true})
    ],

    devServer: {
      noInfo:      true,
      port:        4000,
      contentBase: './public'
    }
  };
}

export default makeConfig;
