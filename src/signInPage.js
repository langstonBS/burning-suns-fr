import React, {Component} from 'react';
import Link from '@material-ui/core/Link';
import Login from './LogInForm'

export default class SignUpPage extends Component{
  render() {
    return(
      <div>
        <Login
        handleUserChange={this.props.handleUserChange}
        title={'Sign In'}
        link={
        <Link href="/signUpPage" variant="body2">
        {"If you don't have an account Sign Up"}
      </Link>}

        />
      </div>
    );
  }
}
