import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// Profile Page + Settings
export default class dashboard extends Component {
  state = { activeItem: 'Profile' };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        Helllllooooooooo.
      </div>
    );
  }
}
