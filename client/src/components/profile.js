import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  Input,
  Menu,
  Segment,
  List,
  Header,
  Progress,
  Image,
  Grid
} from 'semantic-ui-react';

// Profile Page + Settings
class profile extends React.Component {
  state = { activeItem: 'Profile' };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        {/* Menu */}
        <Menu pointing>
          <div class="item">
            <img class="bigger" src={require('../images/logo2.png')} />
          </div>
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

          <div class="right menu">
            <a class="item">
              <i class="bell icon" />
            </a>
            <Menu.Menu position="right">
              <Menu.Item>
                <Input icon="search" placeholder="Search..." />
              </Menu.Item>
            </Menu.Menu>
            <a class="item">Sign Out</a>
          </div>
        </Menu>

        <Grid>
          <Grid.Row>
            <Grid.Column width={3} />
            <Grid.Column width={10}>
              <Progress percent={55}>Label</Progress>
            </Grid.Column>

            <Grid.Column width={3} />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3} />
            <Grid.Column width={5}>
              <Segment>
                <Segment>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column width={5} />
                      <Grid.Column width={10}>
                        <Header>
                          <Image avatar src={require('../images/user.jpg')} />
                          My Profile
                        </Header>
                      </Grid.Column>
                      <Grid.Column width={1} />
                    </Grid.Row>
                  </Grid>
                </Segment>
                <Segment>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column width={5} />
                      <Grid.Column width={10}>
                        <List animated verticalAlign="middle" size="huge">
                          <List.Item>
                            {/* <Image avatar src='/images/avatar/small/helen.jpg' /> */}
                            <List.Content>
                              <List.Header>Contact Info</List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            {/* <Image avatar src='/images/avatar/small/christian.jpg' /> */}
                            <List.Content>
                              <List.Header>School</List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            {/* <Image avatar src='/images/avatar/small/daniel.jpg' /> */}
                            <List.Content>
                              <List.Header>Higher Education</List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content>
                              <List.Header>Emergency Contact Info</List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content>
                              <List.Header>Work</List.Header>
                            </List.Content>
                          </List.Item>
                        </List>
                      </Grid.Column>
                      <Grid.Column width={1} />
                    </Grid.Row>
                  </Grid>
                </Segment>
              </Segment>
            </Grid.Column>
            <Grid.Column width={5}>
              <Segment>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={1} />
                    <Grid.Column width={8}>
                      <Header>Dr. Dogges</Header>
                      <p> Member Since 01-20-1998</p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={6} />
                    <Grid.Column width={4}>
                      <Header>
                        <Image
                          className="img-big"
                          avatar
                          src={require('../images/user.jpg')}
                        />
                      </Header>
                    </Grid.Column>
                    <Grid.Column width={6} />
                  </Grid.Row>
                </Grid>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={1} />
                    <Grid.Column width={8} />
                  </Grid.Row>
                </Grid>
              </Segment>
            </Grid.Column>
            <Grid.Column width={3} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default profile;
