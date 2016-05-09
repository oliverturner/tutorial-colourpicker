import {Map} from 'immutable';
import tinycolor from 'tinycolor2';

import constants from 'constants';

// Recursively run to ensure that a valid colour is returned
// `rand` can sometimes return a string < 6 chars
const getRandomColour = () => {
  const dec    = parseInt('ffffff', 16);
  const rand   = Math.floor(Math.random() * dec).toString(16);
  const colour = tinycolor(rand);

  return colour.isValid() ? colour.toHexString() : getRandomColour();
};


// Initialise
//-----------------------------------------------

const initialState = Map({
  active: getRandomColour(),
  temp:   null
});

const palette = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_ACTIVE_COLOUR:
      return state.set('active', action.payload.colour || getRandomColour());

    case constants.SET_TEMP_COLOUR:
      return state.set('temp', action.payload.colour);

    default:
      return state;
  }
};

export default palette;
