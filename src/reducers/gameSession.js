import * as types from '../constants/actionTypes';

const initialState = {
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
    console.log('CREATE_GAME_SUCCESS reduced (gameSession)');
    return Object.assign({}, state, {
      loading: false,
      error: null,
      id: action.id,
      roomCode: action.roomCode,
      players: [...action.players],
      started: action.started,
      completed: action.completed
    });
  case types.CREATE_GAME_ERROR:
    console.log('CREATE_GAME_ERROR reduced');
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  case types.START_GAME_REQUEST:
    console.log('START_GAME_REQUEST reduced');
    return Object.assign({}, state, {
      loading: true,
    });
  case types.START_GAME_SUCCESS:
    console.log('START_GAME_SUCCESS reduced');
    console.log(action.started);
    return Object.assign({}, state, {
      loading: false,
      started: action.started
    });
  case types.START_GAME_ERROR:
    console.log('START_GAME_ERROR reduced');
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  default:
    return state;
  }
};