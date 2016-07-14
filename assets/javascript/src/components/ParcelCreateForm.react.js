import React, { PropTypes } from 'react';
import AutoCompleteInputBox from './AutoCompleteInputBox.react';

class ParcelCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: undefined,
    };
  }

  render() {
    const dealers = this.props.dealers;
    let user = {email: ''};
    if (this.props.selectedUser) {
      user = this.props.selectedUser;
    }
    const dealerDetails = dealers.map((dealer, i) =>
      <option key={`dealer-${i}`}value={dealer.id}>{dealer.name}</option>
    );

    return (
  <div className="container">
    <div className="well well-sm">
    <div className="row">
      <div className="col-lg-6">

        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <AutoCompleteInputBox fetchUsers={this.props.actions.fetchUsers}
            selectUser={this.props.actions.selectUser} {...this.props}
          />
        </div>

        <div className="form-group">
          <label htmlhtmlFor="mobile">Mobile</label>
          <input type="tel" className="form-control" name="mobile"
            id="mobile" value={user.phone_no}
          />
        </div>

        <div className="form-group">
          <label htmlhtmlFor="Email">Email</label>
          <input type="email" className="form-control" name="Email"
            id="Email" value={user.email}
          />
        </div>

        <div className="form-group">
          <label htmlhtmlFor="Email">Employee ID</label>
          <input type="email" className="form-control" name="Email"
            id="Email" value={user.emp_id}
          />
        </div>
      </div>

      <div className="col-lg-6">
        <div className="form-group">
          <label htmlhtmlFor="dealername">Dealer Name: </label>
          <select name="dealername" id="dealername" className="form-control">
            { dealerDetails }
          </select>
        </div>
      </div>

    </div>
      <div className="row">
        <div className="col-lg-12">
        <div className="form-group">
          <button className="btn btn-primary"> Submit </button>
        </div>
        </div>
      </div>
    </div>
  </div>
);
  }
}

ParcelCreateForm.propTypes = {
  dealers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  selectedUser: PropTypes.object.isRequired,
};

export default ParcelCreateForm;
