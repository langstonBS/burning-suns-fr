import React, { Component } from 'react'
import {
    Link
} from "react-router-dom"
import Theam from './theme';
import './Header.css';

  

export default class Header extends Component {
    

    render() {
        return (
            <div>
                <ul style={ { backgroundColor: Theam.palette.secondary.main }}>
                    { this.props.token === '' && <li><Link to="/SignInPage"><div>Log In</div></Link></li> }
                    {this.props.token === '' && <li><Link to="/SignUpPage"><div>Sign Up</div></Link></li>}
                    { this.props.token !== '' && <li><div>Welcome!</div></li> }
                    {this.props.token !== '' && <li><Link to="/SearchPage"><div>Search Cities</div></Link></li>}
                    {this.props.token !== '' && <li><Link to="/StarredListpage"><div>Starred List</div></Link></li>}
                    { <li><Link to="/abutUs"><div>About Us</div></Link> </li>}
                    {/* <button onClick={() => this.props.handleUserChange('')}>Logout User</button> */}
                    {this.props.token !== '' && <li><Link onClick={() => this.props.handleUserChange('')} to="/SignInPage"><div>Logout</div></Link></li>}
                </ul>
            </div>
        )
    }
}
