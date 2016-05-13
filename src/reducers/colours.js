import {Map}     from 'immutable';
import tinycolor from 'tinycolor2';

import {getRandomColour} from 'utils/colour';
import constants         from 'constants';

const setActiveColour = (state, colour) => {
  if (!colour) return state.set('active', getRandomColour());

  if (colour.isValid && colour.isValid()) return state.set('active', colour);

  return state.set('active', tinycolor(colour));
}

// Initialise
//-----------------------------------------------
const initialState = Map({
  active: getRandomColour(),
  temp:   null
});

const palette = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_ACTIVE_COLOUR:
      return setActiveColour(state, action.payload.colour);

    case constants.SET_TEMP_COLOUR:
      return state.set('temp', action.payload.colour);

    default:
      return state;
  }
};

export default palette;
