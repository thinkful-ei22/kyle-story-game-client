// PAIRED ACTIONS
export const CREATE_GAME_REQUESTED = 'CREATE_GAME_REQUESTED';
export const CREATE_GAME_SUCCESS = 'CREATE_GAME_SUCCESS'; 
export const CREATE_GAME_ERROR = 'CREATE_GAME_ERROR';
export const SERVER_JOIN_ROOM = 'SERVER_JOIN_ROOM';
export const JOIN_ROOM_SUCCESS = 'JOIN_ROOM_SUCCESS';
export const JOIN_ROOM_ERROR = 'JOIN_ROOM_ERROR';
export const SERVER_JOIN_GAME = 'SERVER_JOIN_GAME';
export const JOIN_GAME_SUCCESS = 'JOIN_GAME_SUCCESS';
export const JOIN_GAME_ERROR = 'JOIN_GAME_ERROR';
export const SERVER_LEAVE_ROOM = 'SERVER_LEAVE_ROOM'; // set player 'readyState' in db to false
export const LEAVE_ROOM = 'LEAVE_ROOM'; // redirect back to home screen
export const SERVER_START_GAME = 'SERVER_START_GAME';
export const START_GAME_REQUEST = 'START_GAME_REQUEST';
export const START_GAME_SUCCESS = 'START_GAME_SUCCESS';
export const START_GAME_ERROR = 'START_GAME_ERROR';
export const SERVER_ADD_SENTENCE = 'SERVER_ADD_SENTENCE';
export const ADD_SENTENCE_SUCCESS = 'ADD_SENTENCE_SUCCESS';
export const SERVER_PLAYER_READY = 'SERVER_PLAYER_READY'; // set player 'readyState' in db to 'true' for the gameSession matching the passed in roomCode
export const PLAYER_READY = 'PLAYER_READY'; // io.in('roomCode').emit('action', { type: 'PLAYER_READY', playerName }) - should change player to 'ready' on frontend

// SINGLE ACTIONS
export const ADD_STORIES = 'ADD_STORIES';
export const NEXT_PROMPT = 'NEXT_PROMPT';
export const ADD_INITIAL_PROMPT = 'ADD_INITIAL_PROMPT';
export const ADD_UPCOMING_PROMPT = 'ADD_UPCOMING_PROMPT';
export const SET_PLAYER_NAME = 'SET_PLAYER_NAME';
export const LOAD_PLAYER_NAME = 'LOAD_PLAYER_NAME';
export const ADD_PLAYER_NAME_TO_STORY_STATE = 'ADD_PLAYER_NAME_TO_STORY_STATE';
export const SET_ROOM_CODE = 'SET_ROOM_CODE';
export const UPDATE_PLAYERS = 'UPDATE_PLAYERS';
export const FINISH_GAME = 'FINISH_GAME';
export const SELECT_STORY = 'SELECT_STORY';
