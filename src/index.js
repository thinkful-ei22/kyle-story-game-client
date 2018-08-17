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

import 'normalize.css';
import 'font-awesome/css/font-awesome.css';
// import './float-grid.css';
import './index.css';
import Header from './components/Header';
import NewGame from './components/NewGame';
import Game from './components/Game';
import {WEBSOCKET_SERVER_URI} from './constants';
import {rootReducer} from './reducers';
import LocalStorage from './middlewares/localStorage';
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
  applyMiddleware(routingMiddleware, socketIoMiddleware, LocalStorage, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <main>
        <Route path='/' component={Header} />
        <Route exact path='/' component={NewGame} />
        <Route exact path='/:roomCode' component={Game} />
      </main>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
