import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import constants from 'constants';
import styles from './styles.pcss';

const PaletteControls = ({palette, fillPalette, sortPalette, shufflePalette, clearPalette}) => (
  <div className={styles['controls']}>
    <button className={styles['controlbtn']} onClick={fillPalette}>
      Fill
    </button>
    <button className={styles['controlbtn']} onClick={sortPalette} disabled={palette.length < 2}>
      Sort
    </button>
    <button className={styles['controlbtn']} onClick={shufflePalette} disabled={palette.length < 2}>
      Mix
    </button>
    <button className={styles['controlbtn']} onClick={clearPalette} disabled={palette.length === 0}>
      Clear
    </button>
  </div>
);

PaletteControls.propTypes = {
  palette:        PropTypes.array.isRequired,
  fillPalette:    PropTypes.func.isRequired,
  sortPalette:    PropTypes.func.isRequired,
  shufflePalette: PropTypes.func.isRequired,
  clearPalette:   PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeColour: state.colours.get('active'),
  tempColour:   state.colours.get('temp'),
  palette:      state.palette.toArray()
});

const mapDispatchToProps = (dispatch) => ({
  fillPalette:    () => dispatch({type: constants.PALETTE_FILL}),
  sortPalette:    () => dispatch({type: constants.PALETTE_SORT}),
  shufflePalette: () => dispatch({type: constants.PALETTE_SHUFFLE}),
  clearPalette:   () => dispatch({type: constants.PALETTE_CLEAR})
});

export default connect(mapStateToProps, mapDispatchToProps)(PaletteControls);
