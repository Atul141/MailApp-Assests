import { combineReducers } from 'redux';
import {
  REQUEST_DEALERS, RECEIVE_DEALERS,
} from '../actions/actions';

function dealers(state = {
  isFetching: false,
  didInvalidate: false,
  items: [],
}, action) {
  switch (action.type) {
  case REQUEST_DEALERS:
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false,
    });
  case RECEIVE_DEALERS:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      items: action.dealers,
    });
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  dealers,
});

export default rootReducer;
