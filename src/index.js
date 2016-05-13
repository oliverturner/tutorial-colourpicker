// IMPORTANT: This needs to be first (before any other components)
// to get around CSS order randomness in webpack.
import 'css/reset.pcss';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {AppContainer} from 'react-hot-loader';
import {whyDidYouUpdate} from 'why-did-you-update'

import configureStore from 'stores';
import App from 'pages/home';

const store  = configureStore();
const rootEl = document.getElementById('app');

if (process.env.NODE_ENV !== 'production') {
  whyDidYouUpdate(React);
}

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
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
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      rootEl
    );
  });
}
