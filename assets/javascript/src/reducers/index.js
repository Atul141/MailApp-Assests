import { combineReducers } from 'redux';
import { RECEIVE_DEALERS } from '../actions/actions';

function dealers(state = {
  items: [],
}, action) {
  switch (action.type) {
  case RECEIVE_DEALERS:
    return Object.assign({}, state, {
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
