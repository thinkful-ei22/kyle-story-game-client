// import * as types from '../constants/actionTypes';

const chance = require('chance').Chance();

const initialState = {
  name: chance.first(),
};

export const playerReducer = (state = initialState, action) => {
  switch(action.type) {
  default:
    return state;
  }
};