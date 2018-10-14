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

        {/* Form to update statuses / User pic */}

        <div class="ui form">
          <div class="field">
            <Grid>
              <Grid.Row className="">
                <Grid.Column width={2} />
                <Grid.Column width={10}>
                  <Segment className="style-friends">
                    <Header>
                      <Image
                        className="prof-pic"
                        src={require('../images/sri.jpg')}
                        circular
                      />
                      Hello Sri, what do you want to share today?
                    </Header>
                  </Segment>
                  <Segment>
                    <form>
                      <Header className="">
                        <input type="text" name="name" />
                      </Header>
                      <Button fluid color="teal">
                        Share
                      </Button>
                    </form>
                  </Segment>
                  <Segment>
                    {/* Newsfeed */}
                    <Item.Group divided>
                      <Item>
                        <Item.Image
                          className="img-big"
                          src={require('../images/story-one.jpg')}
                        />

                        <Item.Content>
                          <Item.Header as="a" className="head-big">
                            <div class="head-big">Bootcamp</div>
                          </Item.Header>
                          <Item.Meta>
                            <span className="cinema">Marine Boot Camp</span>
                          </Item.Meta>
                          <Item.Description className="fontbig">
                            We had a guy that somehow got his watch through the
                            indoc (They take all your crap when you first get
                            there). Well, the Drill Instructors found out he had
                            it when they saw him wearing it one day, so they put
                            him in the squad bay trashcan and put the lid on it.
                            Every time they walked by and kicked it he’d pop out
                            with his watch and yell, “SIR THE TIME ON DECK IS
                            ZERO-NINE-FORTY-FIVE!” and then go back into his can
                            like the freakin’ grouch from Sesame Street. It was
                            really, really hard not to laugh at that.
                          </Item.Description>
                          <Item.Extra>
                            {/* Tags */}
                            <Label>Bootcamp</Label>
                          </Item.Extra>
                        </Item.Content>
                      </Item>

                      <Item>
                        <Item.Image
                          className="img-big"
                          src={require('../images/story-two.jpg')}
                        />

                        <Item.Content>
                          <Item.Header as="a" className="head-big">
                            The Eagle Scout
                          </Item.Header>
                          <Item.Meta>
                            <span className="cinema">
                              Marine Corps Boot Camp
                            </span>
                          </Item.Meta>
                          <Item.Description className="fontbig">
                            A recruit in Marine corps boot camp thought he was
                            special because he was an eagle scout. The Drill
                            Instructor picked up on this and during Physical
                            Training took him into the woods and made him build
                            a nest. Then he had to squat over it in order to
                            keep his eggs warm.
                          </Item.Description>
                          <Item.Extra>
                            <Button primary floated="right">
                              Read more
                              <Icon name="right chevron" />
                            </Button>
                            <Label>Marine</Label>
                          </Item.Extra>
                        </Item.Content>
                      </Item>

                      <Item>
                        <Item.Image
                          className="img-big"
                          src={require('../images/story-three.jpg')}
                        />
                        <Item.Content>
                          <Item.Header as="a" className="head-big">
                            The Basic Training Omelette{' '}
                          </Item.Header>
                          <Item.Meta>
                            <span className="cinema">Army</span>
                          </Item.Meta>
                          <Item.Description className="fontbig">
                            Week 1 in Army Basic Training we had a soldier ask
                            for an omelette in chow line (which was not allowed
                            because there was absolutely no time to make custom
                            omelettes for every single basic training soldier).
                            The cooks started making the omelette when a drill
                            sergeant asked what the hell was going on. The basic
                            training soldier replied “go around, drill sergeant,
                            I’m waitin’ on an omelette”. Needless to say, this
                            was the wrong thing to say and do week one in basic
                            training. Our platoon motto was henceforth “go
                            around, drill sergeant, I’m waitin’ on an omelette”
                            and the basic training soldier was henceforth named
                            PVT Omelette.
                          </Item.Description>
                          <Item.Extra>
                            <Button primary floated="right">
                              Read more
                              <Icon name="right chevron" />
                            </Button>
                            <Label>Army</Label>
                          </Item.Extra>
                        </Item.Content>
                      </Item>
                    </Item.Group>
                  </Segment>
                </Grid.Column>

                <Grid.Column width={3}>
                  <Segment className="style-friends">
                    <Header className="text-big-2">My Connections</Header>
                  </Segment>
                  <Segment className="style-friends">
                    <List>
                      <List.Item>
                        <Image
                          className="friend-pic"
                          avatar
                          src={require('../images/av1.jpg')}
                        />
                        <List.Content>
                          <List.Header as="a" className="friend-header">
                            Rachel
                          </List.Header>
                          <List.Description className="friend-descript">
                            Army
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <Image
                          className="friend-pic"
                          avatar
                          src={require('../images/av2.jpg')}
                        />
                        <List.Content>
                          <List.Header as="a" className="friend-header">
                            Lindsay
                          </List.Header>
                          <List.Description className="friend-descript">
                            Military
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <Image
                          className="friend-pic"
                          avatar
                          src={require('../images/av3.jpg')}
                        />
                        <List.Content>
                          <List.Header as="a" className="friend-header">
                            Matthew
                          </List.Header>
                          <List.Description className="friend-descript">
                            Navy
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <Image
                          className="friend-pic"
                          avatar
                          src={require('../images/av4.jpg')}
                        />
                        <List.Content>
                          <List.Header as="a" className="friend-header">
                            Jenny Hess
                          </List.Header>
                          <List.Description className="friend-descript">
                            Air Force
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <Image
                          className="friend-pic"
                          avatar
                          src={require('../images/av5.png')}
                        />
                        <List.Content>
                          <List.Header as="a" className="friend-header">
                            Veronika Ossi
                          </List.Header>
                          <List.Description className="friend-descript">
                            Military
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Segment>
                </Grid.Column>
                <Grid.Column width={1} />
              </Grid.Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
