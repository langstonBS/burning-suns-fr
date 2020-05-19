import React from "react";
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
          <Route path="/SearchPage">
            <SearchPage />
          </Route>
          <Route path="/DetailPage">
            <DetailPage />
          </Route>
         </Switch>
    </Router>
  );
};

