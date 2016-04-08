import expect from 'expect';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import App from '../../src/components/App';
import ParcelCard from '../../src/components/ParcelCard.react';

function setup() {
  const renderer = ReactTestUtils.createRenderer();
  renderer.render(<App />);

  const result = renderer.getRenderOutput();

  return {
    result: result,
  };
}

describe('components', () => {
  describe('App', () => {

    it('should render the App component', () => {
      const { result } = setup();

      expect(result.type).toBe(ParcelCard);
    });
  });
});

