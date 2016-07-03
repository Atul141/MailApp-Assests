import React, { PropTypes } from 'react';
import { fetchUsers } from '../actions/actions';
import Autosuggest from 'react-autosuggest';

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  console.log(suggestion);
  return (
    <span>{suggestion.name}</span>
  );
}

class AutoCompleteInputBox extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
    this.onSuggestionsUpdateRequested = this.onSuggestionsUpdateRequested.bind(this);
    this.state = {
      value: undefined,
    };
  }

  onChange(event, { newValue, method }) {
    this.setState({
      value: newValue,
    });
  }

  onSuggestionsUpdateRequested({ value }) {
    this.setState({
      value,
    });
    if (value && value.length > 3) {
      this.props.fetchUsers(value);
    }
  }

  render() {
    const inputProps = {
      placeholder: 'Name',
      onChange: this.onChange,
      value: this.state.value,
    };

    return (
      <Autosuggest suggestions={this.props.users}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={this.onSuggestionSelected}
        onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
      />
    );
  }

  onSuggestionSelected(event, { suggestion, suggestionValue, sectionIndex, method }) {
    this.setState({
      value: suggestionValue,
    });
  }
}

AutoCompleteInputBox.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

export default AutoCompleteInputBox;

