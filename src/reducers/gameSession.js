import * as types from '../constants/actionTypes';

const initialState = {
  players: ['me', 'someoneElse'],
  loading: false,
  error: null
};

export const gameSessionReducer = (state = initialState, action) => {
  switch(action.type) {
  case types.CREATE_GAME_REQUESTED:
    console.log('CREATE_GAME_REQUESTED reduced');
    return Object.assign({}, state, {
      loading: true
    });
  case types.CREATE_GAME_SUCCESS:
    console.log('CREATE_GAME_SUCCESS reduced');
    console.log(action.roomCode);
    return Object.assign({}, state, {
      loading: false,
      error: null,
      roomCode: action.roomCode,
      players: [...action.players]
    });
  case types.CREATE_GAME_ERROR:
    console.log('CREATE_GAME_ERROR reduced');
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  default:
    return state;
  }
};