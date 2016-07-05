import fetch from 'isomorphic-fetch';
import Constants from '../constants';

export const RECEIVE_DEALERS = 'RECEIVE_DEALERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SELECT_USER = 'SELECT_USER';

function receiveDealers(dealers) {
  return {
    type: RECEIVE_DEALERS,
    dealers,
  };
}

function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

function populateUser(user) {
  console.log('ppp user', user);
  return {
    type: SELECT_USER,
    user,
  };
}

export function fetchDealers() {
  return dispatch =>
    fetch(`${Constants.ServerBaseURL}/${Constants.DealersFetchPath}`)
      .then(response => response.json())
      .then(json => dispatch(receiveDealers(json)));
}

export function fetchUsers(token) {
  return dispatch =>
    fetch(`${Constants.ServerBaseURL}/users/search?q=${token}`)
      .then(response => response.json())
      .then(json => dispatch(receiveUsers(json)));
}

export function selectUser(user) {
  return dispatch =>
    dispatch(populateUser(user));
}
