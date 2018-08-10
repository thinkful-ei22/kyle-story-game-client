import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import io from 'socket.io-client';
import createSocketIoMiddleware from 'redux-socket.io';

import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import {WEBSOCKET_SERVER_URI} from './constants';
import {rootReducer} from './reducers';

let socket = io(WEBSOCKET_SERVER_URI);
const pessimisticExecute = (action, emit, next, dispatch) => {
  emit('action', action);
};

let socketIoMiddleware = 
  createSocketIoMiddleware(socket, 'SERVER_', { execute: pessimisticExecute });

const history = createHistory();

const routingMiddleware = routerMiddleware(history);

export const store = createStore(rootReducer, applyMiddleware(routingMiddleware, socketIoMiddleware, thunk));
