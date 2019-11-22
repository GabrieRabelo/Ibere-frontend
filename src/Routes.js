import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import LoginContainer from './containers/LoginContainer';
import AdminContainer from './containers/AdminContainer';

export default class Routes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/admin" component={LoginContainer} />
          <Route exact path="/admin-info" component={AdminContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}
