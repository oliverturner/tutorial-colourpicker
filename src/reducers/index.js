import {combineReducers} from 'redux';

import colours from './colours';
import palette from './palette';

const rootReducer = combineReducers({
  colours,
  palette
});

export default rootReducer;
