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
export const startGameSuccess = (gameSession) => ({
  type: types.START_GAME_SUCCESS,
  started: gameSession.started
});
export const startGameError = (error) => ({
  type: types.START_GAME_ERROR,
  error
});
export const startGame = (roomCode) => dispatch => {
  dispatch(startGameRequest());
  fetch(`${API_SERVER_URL}/${roomCode}`, {
    method: 'PUT',
    body: JSON.stringify({ started: true }),
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
      console.log('gameSession: ', gameSession);
      dispatch(startGameSuccess(gameSession));
    })
    .catch(err => {
      console.log(err);
      dispatch(startGameError(err));
    });
};
