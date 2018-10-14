import Login from './login';
import Profile from './profile';
import Dashboard from './dashboard';
import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';

// Modify Routes Here.
class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <Switch>
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/Profile" component={Profile} />
            <Route path="/" component={Login} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default Root;
