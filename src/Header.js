import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom"

export default class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    { this.props.token !== '' && <div>Welcome!</div> }
                    { this.props.token !== '' && <Link to="/SearchPage"><div>Search Cities</div></Link> }
                    <Link to="/SignInPage"><div>Log In</div></Link>
                    <Link to="/SignUpPage"><div>Sign Up</div></Link>
                    <button onClick={() =>this.props.handleUserChange('')}>Logout User</button>
                </ul>
            </div>
        )
    }
}
