import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Header } from 'semantic-ui-react';
import form from 'semantic-ui-react';
import '../styles.css';

// login Page + Feed
export default class login extends Component {
  state = { activeItem: '/' };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <div className="child">
          <Header as="h1">TITLE</Header>
          <form class="ui form">
            <div class="field">
              <label>First Name</label>
              <input type="text" name="first-name" placeholder="First Name" />
            </div>
            <div class="field">
              <label>Last Name</label>
              <input type="text" name="last-name" placeholder="Last Name" />
            </div>
            <div class="ui checkbox">
              <input type="checkbox" tabindex="0" class="hidden" />
              <label className="agreement">
                I Agree to the Terms and Conditions
              </label>
            </div>
            <div className="button-style">
              <button
                class="ui basic button"
                type="submit"
                onClick={() => this.props.history.push('/Profile')}
              >
                <i class="icon user" />
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
