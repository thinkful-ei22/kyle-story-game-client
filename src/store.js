import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import io from 'socket.io-client';
import createSocketIoMiddleware from 'redux-socket.io';

import {WEBSOCKET_SERVER_URI} from './constants/websocket';
import {rootReducer} from './reducers';

let socket = io(WEBSOCKET_SERVER_URI);
const pessimisticExecute = (action, emit, next, dispatch) => {
  emit('action', action);
};

let socketIoMiddleware = 
  createSocketIoMiddleware(socket, 'SERVER_', { execute: pessimisticExecute });

export const store = createStore(rootReducer, applyMiddleware(socketIoMiddleware, thunk));
