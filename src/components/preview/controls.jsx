import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import constants from 'constants';
import styles from './styles.pcss';

const PreviewControls = ({setActiveColour}) => (
  <div className={styles['controls']}>
    <button className={styles['controlbtn']} onClick={() => setActiveColour()}>
      Randomise
    </button>
  </div>
);

PreviewControls.propTypes = {
  setActiveColour: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  setActiveColour: (colour) => dispatch({type: constants.SET_ACTIVE_COLOUR, payload: {colour}})
});

export default connect(null, mapDispatchToProps)(PreviewControls);
