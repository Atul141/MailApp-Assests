import fetch from 'isomorphic-fetch';

export const REQUEST_DEALERS = 'REQUEST_DEALERS';
export const RECEIVE_DEALERS = 'RECEIVE_DEALERS';

export function requestDealers() {
  return {
    type: REQUEST_DEALERS,
  };
}

function receiveDealers(dealers) {
  console.log('Dealers ***', dealers);
  return {
    type: RECEIVE_DEALERS,
  //  dealers: dealers.data.children.map(child => child.data)
  };
}

function fetchDealers() {
  return dispatch => {
    dispatch(requestDealers());
    return fetch('http://localhost:8083/dealers')
      .then(response => response.json())
      .then(json => dispatch(receiveDealers(json)));
  };
}

function blah() {
  fetchDealers();
}
