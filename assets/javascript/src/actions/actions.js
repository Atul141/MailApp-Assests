import fetch from 'isomorphic-fetch';

export const RECEIVE_DEALERS = 'RECEIVE_DEALERS';

function receiveDealers(dealers) {
  return {
    type: RECEIVE_DEALERS,
    dealers,
  };
}

export function fetchDealers() {
  return dispatch =>
    fetch('http://localhost:8083/dealers')
      .then(response => response.json())
      .then(json => dispatch(receiveDealers(json)));
}
