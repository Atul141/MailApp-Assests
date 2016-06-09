import fetch from 'isomorphic-fetch';
import Constants from '../constants';

export const RECEIVE_DEALERS = 'RECEIVE_DEALERS';

function receiveDealers(dealers) {
  return {
    type: RECEIVE_DEALERS,
    dealers,
  };
}

export function fetchDealers() {
  return dispatch =>
    fetch(`${Constants.ServerBaseURL}/${Constants.DealersFetchPath}`)
      .then(response => response.json())
      .then(json => dispatch(receiveDealers(json)));
}
