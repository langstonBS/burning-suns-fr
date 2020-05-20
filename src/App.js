import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import SignInPage from './signInPage';
import SignUpPage from './signUpPage';
import DetailPage from './DetailPage';
import SearchPage from './SearchPage';

import { render } from "@testing-library/react";

export default class App extends Component{
  state = {
    token: ''
  }

  handleUserChange = (newToken) => {
    this.setState({ token: newToken })

  }
  render() {
    return (
      <Router>
      
        <Switch>
          <Route path="/SignInPage">
            <SignInPage handleUserChange={this.handleUserChange} />
          </Route>
          <Route path="/SignUpPage">
            <SignUpPage />
          </Route> 
          <Route exact path='/SearchPage' render={(routerProps) => <SearchPage token={this.state.token} {...routerProps} />} 
              />
          {/* <Route path="" >
            <SearchPage />
          </Route> */}
          <Route path="/DetailPage/:city">
            <DetailPage />
          </Route>
         </Switch>
    </Router>
  );
}
}
