import {Map} from 'immutable';

import {getRandomColour} from 'utils/colour';
import constants from 'constants';


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
