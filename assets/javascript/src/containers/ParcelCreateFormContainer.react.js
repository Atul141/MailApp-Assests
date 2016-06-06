import React, { PropTypes } from 'react';

import { connect } from 'react-redux';
import { fetchDealers } from '../actions/actions';
import ParcelCreate from '../components/ParcelCreateForm.react';

class ParcelCreateFormContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDealers());
  }

  render() {
    return (<ParcelCreate dealers={this.props.dealers.items} />);
  }
}

const mapStateToProps = (state) => ({
  dealers: state.dealers,
});

export default connect(
    mapStateToProps,
)(ParcelCreateFormContainer);

ParcelCreateFormContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  dealers: PropTypes.object.isRequired,
};

