import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';

import io from 'socket.io-client';
import createSocketIoMiddleware from 'redux-socket.io';

import './index.css';
import Game from './components/Game';
import NewGame from './components/NewGame';
import {WEBSOCKET_SERVER_URI} from './constants';
import {rootReducer} from './reducers';
import registerServiceWorker from './registerServiceWorker';

let socket = io(WEBSOCKET_SERVER_URI);
const pessimisticExecute = (action, emit, next, dispatch) => {
  emit('action', action);
};
let socketIoMiddleware = 
  createSocketIoMiddleware(socket, 'SERVER_', { execute: pessimisticExecute });

const history = createHistory();
const routingMiddleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(routingMiddleware, socketIoMiddleware, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <h1>What's the Story?</h1>
        <Route exact path='/' component={NewGame} />
        <Route exact path='/:roomCode' component={Game} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
