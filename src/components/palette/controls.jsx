import React, {PropTypes} from 'react';
import {connect}          from 'react-redux';

import constants  from 'constants';
import ControlBar from 'components/controlbar';

const PaletteControls = ({n, fillPalette, sortPalette, shufflePalette, clearPalette}) => (
  <ControlBar
    controls={[
      {label: 'Fill',  handler: fillPalette},
      {label: 'Sort',  handler: sortPalette,    disabled: n < 2},
      {label: 'Mix',   handler: shufflePalette, disabled: n < 2},
      {label: 'Clear', handler: clearPalette,   disabled: n === 0}
    ]}
  />
);

PaletteControls.propTypes = {
  n:              PropTypes.number.isRequired,
  fillPalette:    PropTypes.func.isRequired,
  sortPalette:    PropTypes.func.isRequired,
  shufflePalette: PropTypes.func.isRequired,
  clearPalette:   PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  n: state.palette.size
});

const mapDispatchToProps = (dispatch) => ({
  fillPalette:    () => dispatch({type: constants.PALETTE_FILL}),
  sortPalette:    () => dispatch({type: constants.PALETTE_SORT}),
  shufflePalette: () => dispatch({type: constants.PALETTE_SHUFFLE}),
  clearPalette:   () => dispatch({type: constants.PALETTE_CLEAR})
});

export default connect(mapStateToProps, mapDispatchToProps)(PaletteControls);
