import { combineReducers } from 'redux';
import artistReducer from './artistReducer';
import scoreReducer from './scoreReducer';

export default combineReducers({
  artist: artistReducer,
  // score Reducer doesnt work yet
  score: scoreReducer
});