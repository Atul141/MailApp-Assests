import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import createHashHistory from 'history/lib/createHashHistory';
import { Router, Route, useRouterHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import App from './containers/App';
import ParcelCreateForm from './components/ParcelCreateForm.react';
import ParcelCard from './components/ParcelCard.react';

import { configureStore, DevTools } from './stores/AppStore';

const store = configureStore({users: []});
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render(
    <Provider store={store}>
    <div>
        <Router history={ appHistory }>
            <Route path="/" component={App} >
              <IndexRoute component={ParcelCard} />
              <Route path="parcels" component={ParcelCreateForm} />
            </Route>
        </Router>
        <DevTools />
    </div>
    </Provider>,
    document.getElementById('root')
);
