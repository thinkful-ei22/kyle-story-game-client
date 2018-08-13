import * as types from '../constants/actionTypes';
import { API_SERVER_URL } from '../constants';
import { push } from 'react-router-redux';

export const createGameRequested = () => ({
  type: types.CREATE_GAME_REQUESTED
});
export const createGameSuccess = (gameSession) => ({
  type: types.CREATE_GAME_SUCCESS,
  id: gameSession.id,
  roomCode: gameSession.roomCode,
  players: gameSession.players,
  started: gameSession.started,
  completed: gameSession.completed,
  stories: gameSession.stories
});
export const createGameError = (error) => ({
  type: types.CREATE_GAME_ERROR,
  error
});
export const createNewGame = values => dispatch => {
  dispatch(createGameRequested());
  // console.log(values);
  fetch(API_SERVER_URL, {
    method: 'POST',
    body: JSON.stringify(values),
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(gameSession => {
      console.log(gameSession);
      dispatch(createGameSuccess(gameSession));
      return gameSession;
    })
    .then(gameSession => {
      dispatch(push(`/${gameSession.roomCode}`));
    })
    .catch(err => {
      console.log(err);
      dispatch(createGameError(err));
    });
};

export const startGameRequest = () => ({
  type: types.START_GAME_REQUEST
});
export const serverStartGame = (roomCode) => ({
  type: types.SERVER_START_GAME,
  roomCode
});

// IMPLEMENTED SERVER SIDE
// export const startGameSuccess = (gameSession) => ({
//   type: types.START_GAME_SUCCESS,
//   started: gameSession.started
// });
// export const startGameError = (error) => ({
//   type: types.START_GAME_ERROR,
//   error
// });
export const startGame = (roomCode) => dispatch => {
  dispatch(startGameRequest());
  dispatch(serverStartGame(roomCode));

  /**
     * TODO:
     * figure out if this should still be a 'PUT' request
     *   or sent via socket. Need to update the state for everyone,
     *   so probably needs to be done via socket.
     * 
     * figure out structure for how to make this 
     *   socket dispatch 'thenable'. Maybe the 'REQUEST' and
     *   'SERVER' version are dispatched here and the server 
     *   responds with either the 'success' or 'error' version
     * 
     * also look at 'redux-persist' so that users can reload
     *   the page without crashing once they've joined a room
     * 
     * users should also be able to just navigate to '/roomCode'
     *   and be able to join the game. App should first check to
     *   see if they have session data in localhost, and 
     *   add them as a new player if not (only if game has not
     *   started). if game started, should get a message that 
     *   'players cannot join a game in progress. wait for the 
     *    next round!'
     */
};

export const setRoomCode = (roomCode) => ({
  type: types.SET_ROOM_CODE,
  roomCode
});

export const serverJoinRoom = (roomCode, playerName) => ({
  type: types.SERVER_JOIN_ROOM,
  roomCode,
  playerName
});
export const serverJoinGame = (roomCode, playerName) => ({
  type: types.SERVER_JOIN_GAME,
  roomCode,
  playerName
});
