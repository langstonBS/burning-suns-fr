import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import SignInPage from './signInPage';
import SignUpPage from './signUpPage';
import { render } from "@testing-library/react";

export default class App extends Component{

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
        </Switch>
      </Router>
    );
  };
};

