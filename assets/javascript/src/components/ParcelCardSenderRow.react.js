import React, { PropTypes } from 'react';

const ParcelCardSenderRow = (props) => {
  const row = props.rowDetail;
  return (
    <tr>
      <td>{row.rowKey}</td>
      <td><i className={row.rowClass}></i> {row.rowValue}</td>
    </tr>
    );
};

ParcelCardSenderRow.propTypes = {
  rowDetail: PropTypes.object.isRequired,
};

export default ParcelCardSenderRow;
