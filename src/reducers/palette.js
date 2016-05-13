import {List, Range} from 'immutable';
import tinycolor     from 'tinycolor2';

import {getRandomColour, getBrightness} from 'utils/colour';
import constants                        from 'constants';

const maxLength = 16;

// Ensure that every colour is unique
// Constrain the size of the palette
const addPaletteColour = (state, colour) => {
  // Bail on empty
  if (!colour) return state;

  // Bail on existing
  if (state.find((c) => c.toHex() === tinycolor(colour).toHex())) return state;

  const newState = state.unshift(tinycolor(colour));

  return newState.size > maxLength
    ? newState.setSize(maxLength)
    : newState;
};

const deletePaletteColour = (state, colour) =>
  state.delete(state.indexOf(colour));

// Either fill the remaining slots up to maxLength
// Or replace the entire list if full
const fillPalette = (state) => {
  const rem = maxLength - state.size;

  return rem === 0
    ? Range(0, maxLength).map(getRandomColour)
    : state.concat(Range(0, rem).map(getRandomColour));
};

// Initialise
//-----------------------------------------------
const initialState = List();

const palette = (state = initialState, action) => {
  switch (action.type) {
    case constants.PALETTE_ADD_COLOUR:
      return addPaletteColour(state, action.payload.colour);

    case constants.PALETTE_DELETE_COLOUR:
      return deletePaletteColour(state, action.payload.colour);

    case constants.PALETTE_FILL:
      return fillPalette(state);

    case constants.PALETTE_SORT:
      return state.sortBy(getBrightness).reverse();

    case constants.PALETTE_SHUFFLE:
      return state.sortBy(Math.random);

    case constants.PALETTE_CLEAR:
      return List();

    default:
      return state;
  }
};

export default palette;
