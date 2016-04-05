import React from 'react';
import ParcelCardSenderDetails from './ParcelCardSenderDetails.react';
import ParcelCardRecieverDetails from './ParcelCardReceiverDetails.react';

const ParcelCard = () => {
  const rowDetails = [
    {
      rowKey: 'Dealer',
      rowClass: 'icon-amazon',
      rowValue: 'Amazon',
    },
    {
      rowKey: 'Date',
      rowClass: '',
      rowValue: '12th Mar 2106 10:30:55',
    },
    {
      rowKey: 'Reg No.',
      rowClass: '',
      rowValue: '12',
    },
  ];

  return (
  <div className="col-lg-3 col-md-4">
    <div className="name-card-container">
     <ParcelCardRecieverDetails />
     <ParcelCardSenderDetails rowDetails={rowDetails} />
    </div>
  </div>
  );
};

export default ParcelCard;
