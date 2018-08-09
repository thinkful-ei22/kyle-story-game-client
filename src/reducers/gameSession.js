// import * as types from '../constants/actionTypes';

const initialState = {
  turn: 3,
  players: ['me', 'someoneElse']
};

export const gameSessionReducer = (state = initialState, action) => {
  switch(action.type) {
  default:
    return state;
  }
};