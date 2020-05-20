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
import PrivateRoute from './PrivateRoute.js';


// import { render } from "@testing-library/react";

export default class App extends Component{

  handleUserChange = (newToken) => {
    this.setState({ token: newToken })
    localStorage.setItem('TOKEN', newToken)
  }
  
  render() {
    return (
      <Router>
      
        <Switch>
          <Route path="/SignInPage" render={(routerProps) => 
          <SignInPage handleUserChange={this.handleUserChange} {...routerProps} />}
          />
          <Route path="/SignUpPage" render={(routerProps) =>
            <SignUpPage handleUserChange={this.handleUserChange} {...routerProps} />}
          /> 
          <Route path="/SearchPage">
            <SearchPage />
          </Route>
          <Route path="/DetailPage">
            <DetailPage />
          </Route>
         </Switch>
    </Router>
  );
}
}
