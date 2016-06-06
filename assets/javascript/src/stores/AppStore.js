import React from 'react';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import { applyMiddleware, compose, createStore } from 'redux';

import createLogger from 'redux-logger';

let store;

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
      <LogMonitor theme="tomorrow" preserveScrollTop={false} />
    </DockMonitor>
);

const logger = createLogger();

export function configureStore(initialState, debug = false) {
  const middleware = applyMiddleware(thunk, logger);
  const createStoreWithMiddleware = compose(middleware);

  store = createStoreWithMiddleware(createStore)(rootReducer, initialState, DevTools.instrument());
  return store;
}

export function getStore() {
  return store;
}

