import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import createHashHistory from 'history/lib/createHashHistory';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Router, Route, useRouterHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import App from './containers/App';
import ParcelCreateFormContainer from './containers/ParcelCreateFormContainer.react';
import * as reducers from './reducers';
import { fetchDealers } from './actions/actions';

import { configureStore } from './stores/AppStore';

const store = configureStore({});
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render(
    <Provider store={store}>
    <div>
        <Router history={ appHistory }>
            <Route path="/" component={App} />
            <Route path="/parcels" component={ParcelCreateFormContainer} />
        </Router>
    </div>
    </Provider>,
    document.getElementById('root')
);
