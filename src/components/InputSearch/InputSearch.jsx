import { Component } from 'react';
import PropTypes from 'prop-types';

export class InputSearch extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <p>Find contacts by name</p>
        <input
          type="text"
          value={this.props.filter}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
