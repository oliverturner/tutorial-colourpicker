import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import styles from './styles.pcss';

const ControlBar = ({controls}) => (
  <div className={styles['controls']}>
    {controls.map(({handler, label, disabled = false}, i) => (
      <button key={i} className={styles['controlbtn']} onClick={handler} disabled={disabled}>
        {label}
      </button>
    ))}
  </div>
);

ControlBar.propTypes = {
  controls: PropTypes.array.isRequired
};

export default ControlBar;
