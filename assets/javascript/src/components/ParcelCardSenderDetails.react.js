import React, { PropTypes } from 'react';
import ParcelCardSenderRow from './ParcelCardSenderRow.react';

const ParcelCardSenderDetails = (props) => {
  const senderDetails = props.rowDetails.map((rowDetail, index) =>
    <ParcelCardSenderRow key={index} rowDetail={rowDetail} />
  );

  return (
    <div className="seller-detail">
      <table className="table table-striped">
        <tbody>
          { senderDetails }
        </tbody>
      </table>
    </div>
  );
};

ParcelCardSenderDetails.propTypes = {
  rowDetails: PropTypes.array.isRequired,
};

export default ParcelCardSenderDetails;

