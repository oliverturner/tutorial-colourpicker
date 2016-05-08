import React from 'react';

import styles from './styles.pcss';

const Header = ({children}) => (
  <header className={styles['masthead']}>
    <h1 className={styles['masthead__title']}>{children}</h1>
  </header>
);

export default Header;
