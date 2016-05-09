import path              from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import pcssFocus         from 'postcss-focus';
import pcssNested        from 'postcss-nested';
import pcssReporter      from 'postcss-reporter';

import pkg from '../../package.json';

// Utils
//-----------------------------------------------
const extractForProduction = (loaders) => {
  const extractLoaders = loaders.substr(loaders.indexOf('!'));

  return ExtractTextPlugin.extract('style', extractLoaders);
};

const getCssLoaders = ({localIdentName, production}) => {
  let cssLoaders = `style!css?module&localIdentName=${localIdentName}!postcss`;

  if (production) {
    cssLoaders = extractForProduction(cssLoaders);
  }

  return cssLoaders;
};

// Main config
//-----------------------------------------------
function makeConfig ({
  preEntries = [],
  production,
  devtool,
  output,
  moduleLoaders,
  localIdentName,
  plugins,
  externals = {}
}) {
  return {
    devtool,
    externals,

    debug: !!production,

    entry: [
      'sanitize.css/lib/sanitize.css',
      ...preEntries,
      './src/index.js'
    ],

    output: output || {
      path:       './public',
      publicPath: '/',
      filename:   'app.js'
    },

    module: {
      loaders: moduleLoaders || [
        {
          test:    /\.jsx?$/,
          loaders: ['babel'],
          include: path.join(process.cwd(), 'src')
        },
        {
          test:   /\.p?css$/,
          loader: getCssLoaders({localIdentName, production})
        },
        {
          test:   /\.json$/,
          loader: 'json'
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

    plugins: plugins || [
      new HtmlWebpackPlugin({
        title:    pkg.description,
        template: './config/tmplate.html'
      })
    ],

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
