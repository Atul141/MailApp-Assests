import { combineReducers } from 'redux';
import { RECEIVE_DEALERS, RECEIVE_USERS } from '../actions/actions';

function dealers(state = {
  dealers: [],
}, action) {
  switch (action.type) {
  case RECEIVE_DEALERS:
    return Object.assign({}, state, {
      dealers: action.dealers,
    });

  default:
    return state;
  }
}

function users(state = {
  users: [],
}, action) {
  switch (action.type) {
  case RECEIVE_USERS:
    return Object.assign({}, state, {
      users: action.users,
    });
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  dealers,
  users,
});

export default rootReducer;
