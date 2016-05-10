import React from 'react';

const ParcelCreateContainer = () => {
  const dealers = [
    {
      name: 'Amazon',
      id: 'some-id',
      icon: 'url',
    },
    {
      name: 'Flipkart',
      id: 'some-id',
      icon: 'url',
    },
    {
      name: 'Ebay',
      id: 'some-id',
      icon: 'url',
    },
    {
      name: 'Others',
      id: 'some-id',
      icon: 'url',
    },
  ];

  const dealerDetails = dealers.map((dealer) =>
    <option value={dealer.id}>{dealer.name}</option>
  );

  return (
  <div className="container">
    <div className="well well-sm">
    <div className="row">
      <div className="col-lg-6">

        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input type="text" className="form-control" name="" id="name" />
        </div>

        <div className="form-group">
          <label htmlhtmlFor="mobile">Mobile</label>
          <input type="tel" className="form-control" name="mobile" id="mobile" />
        </div>

        <div className="form-group">
          <label htmlhtmlFor="Email">Email</label>
          <input type="email" className="form-control" name="Email" id="Email" />
        </div>
      </div>

      <div className="col-lg-6">
        <div className="form-group">
          <label htmlhtmlFor="dealername">Dealer Name: </label>
          <select name="dealername" id="dealername" className="form-control">
            { dealerDetails }
          </select>
        </div>

        <div className="form-group">
          <button> Submit </button>
        </div>
      </div>
    </div>
    </div>
  </div>
);
};

export default ParcelCreateContainer;
