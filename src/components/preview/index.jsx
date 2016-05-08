import React from 'react';

import styles from './styles.pcss';

const Preview = ({children}) => (
  <div className={styles['preview']}>
    <input className={styles['preview__footer']} readOnly />
  </div>
);

export default Preview;
