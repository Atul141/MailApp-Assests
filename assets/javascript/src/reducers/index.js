import { combineReducers } from 'redux';
import { RECEIVE_DEALERS, RECEIVE_USERS, SELECT_USER } from '../actions/actions';

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

function selectedUser(state = {
  selectedUser: undefined,
}, action) {
  switch (action.type) {
  case SELECT_USER:
    return Object.assign({}, state, {
      selectedUser: action.user,
    });
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  dealers,
  users,
  selectedUser,
});

export default rootReducer;
