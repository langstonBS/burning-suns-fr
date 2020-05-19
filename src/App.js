import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import SignInPage from './signInPage';
import SignUpPage from './signUpPage';

export default function App() {
  return (
    <Router>
      
        <Switch>
          <Route path="/SignInPage">
            <SignInPage />
          </Route>
          <Route path="/SignUpPage">
            <SignUpPage />
          </Route> 
         </Switch>
    </Router>
  );
};

