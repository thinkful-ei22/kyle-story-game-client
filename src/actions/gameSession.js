import * as types from '../constants/actionTypes';
import { API_SERVER_URL } from '../constants';

// export const serverNewGame = values => ({
//   type: types.SERVER_NEW_GAME,
//   player: values.playerName
// });

export const createGameRequested = () => ({
  type: types.CREATE_GAME_REQUESTED
});

export const createGameSuccess = () => ({
  type: types.CREATE_GAME_SUCCESS
});

export const createGameError = (error) => ({
  type: types.CREATE_GAME_ERROR,
  error
});

export const createNewGame = values => dispatch => {
  dispatch(createGameRequested());
  // console.log(values);s
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
    .then(response => {
      console.log(response);
      // dispatch(createGameSuccess());
    })
    .catch(err => {
      console.log(err);
      dispatch(createGameError(err));
    });

};