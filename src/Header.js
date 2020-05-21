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
                    { this.props.token === '' && <li><Link to="/SignInPage">Log In</Link></li> }
                    {this.props.token === '' && <li><Link to="/SignUpPage">Sign Up</Link></li>}
                    { this.props.token !== '' && <li>Welcome!</li> }
                    {this.props.token !== '' && <li><Link to="/SearchPage">Search Cities</Link></li>}
                    {this.props.token !== '' && <li><Link to="/StarredListpage">Starred List</Link></li>}
                    {this.props.token !== '' && <li><Link to="/Notes">Notes</Link></li>}
                    { <li><Link to="/abutUs">About Us</Link> </li>}
                    {/* <button onClick={() => this.props.handleUserChange('')}>Logout User</button> */}
                    {this.props.token !== '' && <li><Link onClick={() => this.props.handleUserChange('')} to="/SignInPage"><div>Logout</div></Link></li>}
                </ul>
            </div>
        )
    }
}
