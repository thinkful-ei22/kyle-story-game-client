import * as types from '../constants/actionTypes';

export default function ({ dispatch }) {
  return (next) => (action) => {
    switch (action.type) {
    case types.SET_PLAYER_NAME:
      console.log('SET_PLAYER_NAME middleware saving to sessionStorage');
      console.log('playerName: ', action.playerName);
      sessionStorage.setItem('playerName', action.playerName);
      break;
    case types.LOAD_PLAYER_NAME:
      console.log('LOAD_PLAYER_NAME middleware loading from sessionStorage');
      console.log('playerName: ', sessionStorage.getItem('playerName'));
      action.playerName = sessionStorage.getItem('playerName');
      console.log('action.playerName: ', action.playerName);
      break;
    default:
      break;
    }
    next(action);
  };
}