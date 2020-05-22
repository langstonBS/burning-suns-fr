import React, { Component } from 'react'
import {
    Link
} from "react-router-dom"
import './Header.css';
import useStyles from './theme';
import Typography from '@material-ui/core/Typography';

export default function Header(props)  {
const classes = useStyles();
        return (
            <div>
               <ul className={classes.header} variant="h6">
                    {props.token === '' && <li><Link to="/SignInPage">Log In</Link></li> }
                    {props.token === '' && <li><Link to="/SignUpPage">Sign Up</Link></li>}
                    {props.token !== '' && <li>Welcome!</li> }
                    {props.token !== '' && <li><Link to="/SearchPage">Search Cities</Link></li>}
                    {props.token !== '' && <li><Link to="/StarredListpage">Starred List</Link></li>}
                    {props.token !== '' && <li><Link to="/Notes">Notes</Link></li>}
                    { <li><Link to="/aboutUs">About Us</Link> </li>}
                    {/* <button onClick={() => this.props.handleUserChange('')}>Logout User</button> */}
                    {props.token !== '' && <li><Link onClick={() => props.handleUserChange('')} to="/SignInPage"><div>Logout</div></Link></li>}
                </ul>
            </div>
        )
    }

