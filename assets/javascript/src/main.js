import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import App from './components/App';
import ParcelCreate from './components/ParcelCreate.react';
import * as reducers from './reducers';

const loggerMiddleware = createLogger();

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
      <LogMonitor theme="tomorrow" preserveScrollTop={false} />
    </DockMonitor>
);

const store = createStore(
      combineReducers({
        ...reducers,
        routing: routerReducer,
      }),
      applyMiddleware(
       thunkMiddleware, // lets us dispatch() functions
       loggerMiddleware, // neat middleware that logs actions
      ),
      DevTools.instrument(),
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
    <div>
        <Router history={history}>
            <Route path="/" component={App} >
              <Route path="parcels" component={ParcelCreate} />
            </Route>
        </Router>
    <DevTools />
    </div>
    </Provider>,
    document.getElementById('root')
);
