import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import './index.css';
import Game from './components/Game';
import NewGame from './components/NewGame';
import {store} from './store';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path='/:roomCode' component={Game} />
        <Route exact path='/' component={NewGame} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
