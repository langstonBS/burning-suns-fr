import React, { Component } from 'react'
import {
    Link
} from "react-router-dom"
// import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LinkMUI from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

// import useStyles from './theme';

export default function Header(props)  {

    const useStyles = makeStyles((theme) => ({
        '@global': {
          ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
          },
        },
        appBar: {
          borderBottom: `1px solid ${theme.palette.divider}`,
        },
        toolbar: {
          flexWrap: 'wrap',
        },
        toolbarTitle: {
          flexGrow: 1,
        },
        link: {
          margin: theme.spacing(1, 1.5),
        },
    }))
    const classes = useStyles();
        return (
            // <div>
            //    <ul className={classes.header} variant="h6">
            //         {props.token !== '' && <li><Link onClick={() => props.handleUserChange('')} to="/SignInPage"><div>Logout</div></Link></li>}
            //     </ul>
            // </div>
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                  <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                      Burning Suns
                    </Typography>
                    <nav>
                    {
                          props.token === '' && <Button 
                          href="/SignInPage" 
                          color="primary" 
                          variant="outlined" 
                          className={classes.link}>
                        Login
                        </Button>
                      }
                                            {
                          props.token === '' && <Button
                          href="/SignUpPage" 
                          color="primary" 
                          variant="outlined" 
                          className={classes.link}>
                        Signup
                        </Button>
                      }
                      {
                          props.token !== '' && <LinkMUI variant="button" color="textPrimary" href="/SearchPage" className={classes.link}>
                          Search Cities
                        </LinkMUI>
                      }
                      {
                        props.token !== '' && <LinkMUI variant="button" color="textPrimary" href="/StarredListpage" className={classes.link}>
                        Starred Cities
                        </LinkMUI>
                      }
                      {
                          props.token !== '' && <LinkMUI variant="button" color="textPrimary" href="/Notes" className={classes.link}>
                          Notes
                        </LinkMUI>
                      }
                    <LinkMUI variant="button" color="textPrimary" href="/aboutUs" className={classes.link}>
                        About Us
                      </LinkMUI>
                      {
                          props.token !== '' && <Button onClick={() => props.handleUserChange('')}
                          href="/SignInPage" 
                          color="primary" 
                          variant="outlined" 
                          className={classes.link}>
                        Logout
                        </Button>
                      }

                    </nav>
                  </Toolbar>
                </AppBar>
        )
    }

