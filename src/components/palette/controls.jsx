import React, {PropTypes} from 'react';
import {connect}          from 'react-redux';

import constants  from 'constants';
import ControlBar from 'components/controlbar';

const PaletteControls = ({palette, fillPalette, sortPalette, shufflePalette, clearPalette}) => (
  <ControlBar
    controls={[
      {label: 'Fill',  handler: fillPalette},
      {label: 'Sort',  handler: sortPalette,    disabled: palette.length < 2},
      {label: 'Mix',   handler: shufflePalette, disabled: palette.length < 2},
      {label: 'Clear', handler: clearPalette,   disabled: palette.length === 0}
    ]}
  />
);

PaletteControls.propTypes = {
  palette:        PropTypes.array.isRequired,
  fillPalette:    PropTypes.func.isRequired,
  sortPalette:    PropTypes.func.isRequired,
  shufflePalette: PropTypes.func.isRequired,
  clearPalette:   PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  palette: state.palette.toArray()
});

const mapDispatchToProps = (dispatch) => ({
  fillPalette:    () => dispatch({type: constants.PALETTE_FILL}),
  sortPalette:    () => dispatch({type: constants.PALETTE_SORT}),
  shufflePalette: () => dispatch({type: constants.PALETTE_SHUFFLE}),
  clearPalette:   () => dispatch({type: constants.PALETTE_CLEAR})
});

export default connect(mapStateToProps, mapDispatchToProps)(PaletteControls);
