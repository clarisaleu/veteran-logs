import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Menu } from '../containers/Menu/';

// Profile Page + Settings
export default class dashboard extends Component {
  state = { activeItem: 'Profile' };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu />;
      </div>
    );
  }
}
