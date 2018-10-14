import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Input, Menu, Segment, Header } from 'semantic-ui-react';
import { List, Grid, Image, Item } from 'semantic-ui-react';
import { Button, Icon, Label } from 'semantic-ui-react';
import form from 'semantic-ui-react';

// Profile Page + Settings
export default class inbox extends Component {
  state = { activeItem: 'Messages' };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        {/* Menu */}
        <Menu pointing icon color={'teal'}>
          <div class="item">
            <img class="bigger" src={require('../images/logo2.png')} />
          </div>

          <Menu.Item
            name="Dashboard"
            active={activeItem === 'Dashboard'}
            onClick={() => this.props.history.push('/Dashboard')}
          >
            <Icon name="home" className="bigger" />
          </Menu.Item>

          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>

          <div class="right menu">
            <a class="item">
              <i class="bell icon bigger" />
            </a>
            <Menu.Item
              name="Messages"
              active={activeItem === 'Messages'}
              onClick={() => this.props.history.push('/Messages')}
            >
              <Icon name="inbox" className="bigger" />
            </Menu.Item>
            <Menu.Item
              name="Profile"
              active={activeItem === 'Profile'}
              onClick={() => this.props.history.push('/Profile')}
            >
              <Icon name="user" className="bigger" />
            </Menu.Item>
            <Menu.Item
              name="Settings"
              active={activeItem === 'Settings'}
              onClick={() => this.props.history.push('/Settings')}
            >
              <Icon name="settings" className="bigger" />
            </Menu.Item>
            <a class="item">Sign Out</a>
          </div>
        </Menu>
      </div>
    );
  }
}
