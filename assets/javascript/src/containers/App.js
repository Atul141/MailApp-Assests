import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchDealers } from '../actions/actions';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchDealers());
  }

  render() {
    return (
      <div>
      {this.props.children && React.cloneElement(this.props.children, {
        dealers: this.props.dealers.items,
      })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dealers: state.dealers,
});

export default connect(
  mapStateToProps,
)(App);

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  dealers: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
};

