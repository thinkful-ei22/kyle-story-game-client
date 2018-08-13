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
      dispatch(createGameSuccess(gameSession));
      return gameSession;
    })
    .then(gameSession => {
      dispatch(push(`/${gameSession.roomCode}`));
    })
    .catch(err => {
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

export const startGame = (roomCode) => dispatch => {
  dispatch(startGameRequest());
  dispatch(serverStartGame(roomCode));

  /**
     * TODO:
     * 
     * also look at 'redux-persist' so that users can reload
     *   the page without crashing once they've joined a room
     * 
     * users should also be able to just navigate to '/roomCode'
     *   and be able to join the game. App should first check to
     *   see if they have session data in localhost (roomCode 
     *   pulled from url, but need to store playerName?), and 
     *   add them as a new player if not (only if game has not
     *   started). if game in progress, should get a message that 
     *   'players cannot join a game in progress. wait for the 
     *    next round!'. if game completed, allow browsing stories
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

export const addPlayerNameToStoryState = (playerName) => ({
  type: types.ADD_PLAYER_NAME_TO_STORY_STATE,
  playerName
});

export const selectStory = (storyId) => ({
  type: types.SELECT_STORY,
  storyId
});