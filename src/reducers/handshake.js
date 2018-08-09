import * as types from '../constants/actionTypes';

const initialState = {};

export const handshakeReducer = (state = initialState, action) => {
  switch(action.type) {
  case types.MESSAGE:
    console.log(action.data);
    return Object.assign({}, state, {
      serverMessage: action.data
    });
  default:
    return state;
  }
};