import * as types from '../constants/actionTypes';

const chance = require('chance').Chance();

// const playerName = localStorage.getItem('playerName') || chance.first();

const initialState = {
  // name: playerName
};

export const playerReducer = (state = initialState, action) => {
  switch(action.type) {
  case types.LOAD_PLAYER_NAME:
    console.log('LOAD_PLAYER_NAME reduced');
    console.log('playerName: ', action.playerName);
    return Object.assign({}, state, {
      name: action.playerName
    });
  case types.SET_PLAYER_NAME:
    console.log('SET_PLAYER_NAME reduced');
    return Object.assign({}, state, {
      name: action.playerName
    });
  default:
    return state;
  }
};