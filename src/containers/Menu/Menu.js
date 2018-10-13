import * as React from 'react';

class Menu extends React.Component {
  render() {
    {
      /* Menu */
    }
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
    </Menu>;
  }
}
export default Menu;
