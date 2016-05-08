import React from 'react';

import Header from 'components/header';
import ColourField from 'components/colourfield';
import Preview from 'components/preview';
import Favourites from 'components/favourites';

/**
 * Import locally scoped styles using css-loader
 * See style.sass in this directory.
 *
 * More info: https://github.com/webpack/css-loader#local-scope
 */
import styles from './styles.pcss';

const Application = () => (
  <div className={styles['container']}>
    <div className={styles['component']}>
      <Header>Colour picker</Header>
      <ColourField />
      <div className={styles['row']}>
        <Preview />
        <Favourites />
      </div>

      <p className={styles['controls']}>
        <button>Randomise!</button>
      </p>
    </div>
  </div>
);

export default Application;
