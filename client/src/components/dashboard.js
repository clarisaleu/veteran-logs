import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Input, Menu, Segment, Header } from 'semantic-ui-react';
import { List, Grid, Image, Item } from 'semantic-ui-react';
import { Button, Icon, Label } from 'semantic-ui-react';
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
          <div class="item">
            <img src={require('../images/logo2.png')} />
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
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        {/* Form to update statuses / User pic */}

        <div class="ui form">
          <div class="field">
            <Grid>
              <Grid.Row>
                <Grid.Column width={2} />
                <Grid.Column width={12}>
                  <Segment>
                    <Header>
                      <Image
                        className="prof-pic"
                        src={require('../images/user.jpg')}
                        circular
                      />
                      What do you want to share today?
                    </Header>
                  </Segment>
                  <Segment>
                    <input type="text" />
                  </Segment>
                  <Segment>
                    {/* Newsfeed */}
                    <Item.Group divided>
                      <Item>
                        <Item.Image src="https://occ-0-1001-999.1.nflxso.net/art/15495/883368e492e8c5e23b5dc38527e412747d015495.jpg" />

                        <Item.Content>
                          <Item.Header as="a">12 Years a Slave</Item.Header>
                          <Item.Meta>
                            <span className="cinema">Union Square 14</span>
                          </Item.Meta>
                          <Item.Description>My status update</Item.Description>
                          <Item.Extra>
                            <Label>IMAX</Label>
                            <Label
                              icon="globe"
                              content="Additional Languages"
                            />
                          </Item.Extra>
                        </Item.Content>
                      </Item>

                      <Item>
                        <Item.Image src="https://c1-zingpopculture.eb-cdn.com.au/merchandising/images/packshots/9e11772026914d30bf541381997908a2_Large.png" />

                        <Item.Content>
                          <Item.Header as="a">My Neighbor Totoro</Item.Header>
                          <Item.Meta>
                            <span className="cinema">IFC Cinema</span>
                          </Item.Meta>
                          <Item.Description>My status update</Item.Description>
                          <Item.Extra>
                            <Button primary floated="right">
                              Buy tickets
                              <Icon name="right chevron" />
                            </Button>
                            <Label>Limited</Label>
                          </Item.Extra>
                        </Item.Content>
                      </Item>

                      <Item>
                        <Item.Image src="https://upload.wikimedia.org/wikipedia/en/b/bc/Watchmen_film_poster.jpg" />

                        <Item.Content>
                          <Item.Header as="a">Watchmen</Item.Header>
                          <Item.Meta>
                            <span className="cinema">IFC</span>
                          </Item.Meta>
                          <Item.Description>My status update</Item.Description>
                          <Item.Extra>
                            <Button primary floated="right">
                              Buy tickets
                              <Icon name="right chevron" />
                            </Button>
                          </Item.Extra>
                        </Item.Content>
                      </Item>
                    </Item.Group>
                  </Segment>
                </Grid.Column>

                <Grid.Column width={2}>
                  <div>
                    <Header>Friends List</Header>
                    <List>
                      <List.Item>
                        <Image
                          avatar
                          src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
                        />
                        <List.Content>
                          <List.Header as="a">Rachel</List.Header>
                          <List.Description>
                            Last seen watching{' '}
                            <a>
                              <b>Arrested Development</b>
                            </a>{' '}
                            just now.
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <Image
                          avatar
                          src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
                        />
                        <List.Content>
                          <List.Header as="a">Lindsay</List.Header>
                          <List.Description>
                            Last seen watching{' '}
                            <a>
                              <b>Bob's Burgers</b>
                            </a>{' '}
                            10 hours ago.
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <Image
                          avatar
                          src="https://react.semantic-ui.com/images/avatar/small/matthew.png"
                        />
                        <List.Content>
                          <List.Header as="a">Matthew</List.Header>
                          <List.Description>
                            Last seen watching{' '}
                            <a>
                              <b>The Godfather Part 2</b>
                            </a>{' '}
                            yesterday.
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <Image
                          avatar
                          src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
                        />
                        <List.Content>
                          <List.Header as="a">Jenny Hess</List.Header>
                          <List.Description>
                            Last seen watching{' '}
                            <a>
                              <b>Twin Peaks</b>
                            </a>{' '}
                            3 days ago.
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <Image
                          avatar
                          src="https://react.semantic-ui.com/images/avatar/small/veronika.jpg"
                        />
                        <List.Content>
                          <List.Header as="a">Veronika Ossi</List.Header>
                          <List.Description>
                            Has not watched anything recently
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  </div>
                  <Segment />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
