// IMPORTANT: This needs to be first (before any other components)
// to get around CSS order randomness in webpack.
import 'css/reset.pcss';

import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import configureStore from 'stores';
import App from 'pages/home';

const store = configureStore();
const rootEl = document.getElementById('app');

ReactDOM.render(
  <AppContainer>
    <App store={store} />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./pages/home', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('pages/home').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp store={store} />
      </AppContainer>,
      rootEl
    );
  });
}
