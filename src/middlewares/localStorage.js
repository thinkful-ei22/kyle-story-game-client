import * as types from '../constants/actionTypes';

export default function ({ dispatch }) {
  return (next) => (action) => {
    switch (action.type) {
    case types.SET_PLAYER_NAME:
      console.log('SET_PLAYER_NAME middleware saving to localStorage');
      console.log('playerName: ', action.playerName);
      localStorage.setItem('playerName', action.playerName);
      break;
    case types.LOAD_PLAYER_NAME:
      console.log('LOAD_PLAYER_NAME middleware loading from localStorage');
      console.log('playerName: ', localStorage.getItem('playerName'));
      action.playerName = localStorage.getItem('playerName');
      console.log('action.playerName: ', action.playerName);
      break;
    default:
      break;
    }
    next(action);
  };
}