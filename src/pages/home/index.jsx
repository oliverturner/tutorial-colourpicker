import React, {PropTypes} from 'react';
import {connect}          from 'react-redux';

import Header          from 'components/header';
import ColourField     from 'components/colourfield';
import Preview         from 'components/preview';
import PreviewControls from 'components/preview/controls';
import Palette         from 'components/palette';
import PaletteControls from 'components/palette/controls';

import constants from 'constants';
import styles    from './styles.pcss';

const Application = ({
  activeColour, tempColour, palette,
  setActiveColour, setTempColour, addPaletteColour, deletePaletteColour
}) => (
  <div className={styles['container']} style={{backgroundColor: activeColour}}>
    <div className={styles['component']}>
      <Header>Colour Picker</Header>
      <ColourField colour={activeColour} onChange={setActiveColour} onSubmit={addPaletteColour} />
      <div className={styles['row']}>
        <div className={styles['row__item']}>
          <Preview activeColour={activeColour} tempColour={tempColour} />
          <PreviewControls />
        </div>
        <div className={styles['row__item']}>
          <Palette
            palette={palette}
            onItemHover={setTempColour}
            onItemClick={setActiveColour}
            onItemShiftClick={deletePaletteColour}
          />
          <PaletteControls />
        </div>
      </div>
    </div>
  </div>
);

Application.propTypes = {
  activeColour:        PropTypes.string.isRequired,
  tempColour:          PropTypes.string,
  palette:             PropTypes.array.isRequired,
  setActiveColour:     PropTypes.func.isRequired,
  setTempColour:       PropTypes.func.isRequired,
  addPaletteColour:    PropTypes.func.isRequired,
  deletePaletteColour: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeColour: state.colours.get('active'),
  tempColour:   state.colours.get('temp'),
  palette:      state.palette.toArray()
});

const mapDispatchToProps = (dispatch) => ({
  setActiveColour:     (colour) => dispatch({type: constants.SET_ACTIVE_COLOUR, payload: {colour}}),
  setTempColour:       (colour) => dispatch({type: constants.SET_TEMP_COLOUR, payload: {colour}}),
  addPaletteColour:    (colour) => dispatch({type: constants.PALETTE_ADD_COLOUR, payload: {colour}}),
  deletePaletteColour: (colour) => dispatch({type: constants.PALETTE_DELETE_COLOUR, payload: {colour}})
});

export default connect(mapStateToProps, mapDispatchToProps)(Application);
