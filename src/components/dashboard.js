import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Input, Menu, Segment } from 'semantic-ui-react';
import form from 'semantic-ui-react';

// Profile Page + Settings
export default class dashboard extends Component {
  state = { activeItem: 'Dashboard' };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        {/* Menu */}
        <Menu pointing>
          <Menu.Item
            name="Dashboard"
            active={activeItem === 'Dashboard'}
            onClick={() => this.props.history.push('/Dashboard')}
          />
          <Menu.Item
            name="Messages"
            active={activeItem === 'Messages'}
            onClick={() => this.props.history.push('/Messages')}
          />
          <Menu.Item
            name="Friends"
            active={activeItem === 'Friends'}
            onClick={() => this.props.history.push('/Friends')}
          />
          <Menu.Item
            name="Profile"
            active={activeItem === 'Profile'}
            onClick={() => this.props.history.push('/Profile')}
          />
          <Menu.Item
            name="Settings"
            active={activeItem === 'Settings'}
            onClick={() => this.props.history.push('/Settings')}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        {/* Form to update statuses */}
        <div class="ui form">
          <div class="field">
            <label>User Input</label>
            <input type="text" />
          </div>
        </div>
      </div>
    );
  }
}
