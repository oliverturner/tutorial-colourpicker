import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import Header from 'components/header';
import ColourField from 'components/colourfield';
import Preview from 'components/preview';
import Favourites from 'components/favourites';

import constants from 'constants';
import styles from './styles.pcss';

const Application = ({
  activeColour, tempColour, palette,
  setActiveColour, setTempColour,
  addPaletteColour, fillPalette, sortPalette, shufflePalette, clearPalette
}) => (
  <div className={styles['container']} style={{backgroundColor: activeColour}}>
    <div className={styles['component']}>
      <Header>Colour Picker</Header>
      <ColourField
        colour={activeColour}
        onChange={setActiveColour}
        onSubmit={addPaletteColour}
      />
      <div className={styles['row']}>
        <Preview activeColour={activeColour} tempColour={tempColour} />
        <Favourites palette={palette} onHover={setTempColour} onClick={setActiveColour} />
      </div>
      <footer className={styles['footer']}>
        <div className={styles['controls']}>
          <button
            className={styles.controlbtn}
            onClick={() => setActiveColour()}
          >Randomise
          </button>
        </div>
        <div className={styles['controls']}>
          <button
            className={styles['controlbtn']}
            onClick={fillPalette}
          >Fill
          </button>
          <button
            className={styles['controlbtn']}
            onClick={sortPalette}
            disabled={palette.length < 2}
          >Sort
          </button>
          <button
            className={styles['controlbtn']}
            onClick={shufflePalette}
            disabled={palette.length < 2}
          >Mix
          </button>
          <button
            className={styles['controlbtn']}
            onClick={clearPalette}
            disabled={palette.length === 0}
          >Clear
          </button>
        </div>
      </footer>
    </div>
  </div>
);

Application.propTypes = {
  activeColour:     PropTypes.string.isRequired,
  tempColour:       PropTypes.string,
  palette:          PropTypes.array.isRequired,
  setActiveColour:  PropTypes.func.isRequired,
  setTempColour:    PropTypes.func.isRequired,
  addPaletteColour: PropTypes.func.isRequired,
  fillPalette:      PropTypes.func.isRequired,
  sortPalette:      PropTypes.func.isRequired,
  shufflePalette:   PropTypes.func.isRequired,
  clearPalette:     PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeColour: state.colours.get('active'),
  tempColour:   state.colours.get('temp'),
  palette:      state.palette.toArray()
});

const mapDispatchToProps = (dispatch) => ({
  setActiveColour:  (colour) => dispatch({type: constants.SET_ACTIVE_COLOUR, payload: {colour}}),
  setTempColour:    (colour) => dispatch({type: constants.SET_TEMP_COLOUR, payload: {colour}}),
  addPaletteColour: (colour) => dispatch({type: constants.PALETTE_ADD_COLOUR, payload: {colour}}),
  fillPalette:      () => dispatch({type: constants.PALETTE_FILL}),
  sortPalette:      () => dispatch({type: constants.PALETTE_SORT}),
  shufflePalette:   () => dispatch({type: constants.PALETTE_SHUFFLE}),
  clearPalette:     () => dispatch({type: constants.PALETTE_CLEAR})
});

export default connect(mapStateToProps, mapDispatchToProps)(Application);
