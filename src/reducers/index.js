import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import { handshakeReducer } from './handshake';
import { playerReducer } from './player';
import { storyReducer } from './story';
import { gameSessionReducer } from './gameSession';


export const rootReducer = combineReducers({
  form: formReducer,
  player: playerReducer,
  gameSession: gameSessionReducer,
  handshake: handshakeReducer,
  router: routerReducer,
  story: storyReducer
});