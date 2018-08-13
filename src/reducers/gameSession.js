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
    console.log('action.players: ', action.players);
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
    console.log('START_GAME_SUCCESS reduced (gameSession)');
    console.log('started: ', action.gameSession.started);
    return Object.assign({}, state, {
      loading: false,
      started: action.gameSession.started,
      players: [...action.gameSession.players]
    });
  case types.START_GAME_ERROR:
    console.log('START_GAME_ERROR reduced');
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  case types.FINISH_GAME:
    return Object.assign({}, state, {
      completed: true
    });
  case types.SET_ROOM_CODE:
    console.log('SET_ROOM_CODE reduced');
    return Object.assign({}, state, {
      roomCode: action.roomCode
    });
  case types.JOIN_ROOM_ERROR:
    console.log('JOIN_ROOM_ERROR reduced');
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  case types.JOIN_GAME_SUCCESS:
    console.log('JOIN_GAME_SUCCESS reduced (gameSession)');
    console.log('action.players: ', action.players);
    return Object.assign({}, state, {
      loading: false,
      error: null,
      id: action.id,
      roomCode: action.roomCode,
      players: action.players,
      started: action.started,
      completed: action.completed
    });
  case types.UPDATE_PLAYERS:
    console.log('UPDATE_PLAYERS reduced');
    return Object.assign({}, state, {
      players: [...action.players]
    });
  default:
    return state;
  }
};