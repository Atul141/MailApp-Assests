import expect from 'expect';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import ParcelCardSenderRow from '../../src/components/ParcelCardSenderRow.react';

function setup() {
  const props= {
    rowDetail: {
      rowKey: "Name",
      rowValue: "Mailbox",
      rowClass: "icon-mailbox",
    },
  };

  const renderer = ReactTestUtils.createRenderer();
  renderer.render(<ParcelCardSenderRow { ...props } />);

    const result = renderer.getRenderOutput();

    return result;
  }


  describe('ParcelCardSenderRow', () => {

    let result, tableDivisions, tdchildren;

    beforeEach(() => {
     result = setup();
     tableDivisions = result.props.children;
     tdchildren = tableDivisions[1].props.children;
   });

   it('should render a table row with values', () => {
    expect(result.type).toBe('tr');
  });

  it('should render a table row with 2tds', () => {
    expect(result.props.children.length).toEqual(2);
  });


  it('should have a label name for first td', () => {
    expect(tableDivisions[0].type).toBe("td");
    expect(tableDivisions[0].props.children).toEqual("Name");
  });

  it('should render icon of the dealer in 2nd td', () => {
    expect(tdchildren[0].type).toBe('i');
    expect(tdchildren[0].props.className).toEqual('icon-mailbox');
  });

  it('should render name of the dealer in span inside 2nd td', () => {
    expect(tdchildren[1].type).toBe('span');
    expect(tdchildren[1].props.children).toEqual("Mailbox");
  });

});
