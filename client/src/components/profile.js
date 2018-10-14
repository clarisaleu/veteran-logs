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
  Icon,
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

        <Grid>
          <Grid.Row>
            <Grid.Column width={3} />
            <Grid.Column width={5}>
              <Segment>
                <Segment>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column width={5} />
                      <Grid.Column width={10}>
                        <Header className="head-big">
                          <Image avatar src={require('../images/sri.jpg')} />
                          My Profile
                        </Header>
                      </Grid.Column>
                      <Grid.Column width={1} />
                    </Grid.Row>
                  </Grid>
                </Segment>
                <Segment>
                  <Grid>
                    <Grid.Row className="colored">
                      <Grid.Column width={0} />
                      <Grid.Column width={10}>
                        <List verticalAlign="Left" size="huge">
                          <List.Item>
                            <List.Content>
                              <List.Header className="colored friends-header">
                                Srikanth Mukku
                              </List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content>
                              <List.Header>Served 18 Years</List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content>
                              <List.Header>
                                PMP - National Hydrographic School
                              </List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content>
                              <List.Header>Seattle, WA</List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content>
                              <List.Header>
                                CEO at My Legacy Logs Inc.
                              </List.Header>
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
                      <Header size="huge" className="fontbig2">
                        Srikanth Mukku
                      </Header>
                      <p class="memb-big"> Member Since 10-13-2018</p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={6} />
                    <Grid.Column width={4}>
                      <Header>
                        <Image
                          className="img-big"
                          avatar
                          src={require('../images/sri.jpg')}
                        />
                      </Header>
                      <Header as="h3" dividing />
                    </Grid.Column>

                    <Grid.Column width={6} />
                    <Header className="style-gal-head">My Gallery</Header>
                    <List verticalAlign="middle">
                      <List.Item>
                        <Image
                          className="style-gal"
                          src={require('../images/gal1.jpg')}
                        />
                        <List.Content>
                          <List.Header />
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <Image
                          className="style-gal"
                          src={require('../images/gal2.jpg')}
                        />
                        <List.Content />
                      </List.Item>
                      <List.Item>
                        <Image
                          className="style-gal"
                          src={require('../images/gal3.jpg')}
                        />
                        <List.Content />
                      </List.Item>
                    </List>
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
