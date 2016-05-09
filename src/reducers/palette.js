import {List} from 'immutable';

import constants from 'constants';

const addPaletteColour = (state, colour) => {
  if (!colour || state.includes(colour)) return state;

  return state.unshift(colour).setSize(16);
};

// Initialise
//-----------------------------------------------
const initialState = List();

const palette = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_PALETTE_COLOUR:
      return addPaletteColour(state, action.payload.colour);

    case constants.DELETE_PALETTE_COLOUR:
      return state.pop();

    default:
      return state;
  }
};

export default palette;
