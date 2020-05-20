import React, { useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import request from 'superagent';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import DetailPage from "./DetailPage";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Burning Suns
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// const handleOnChange = event => {
//   const { name, value } = event.target;
// //   setInputValues({ [city]: value });
// console.log(name, value);
// };

// function CityForm(props) {
    
// }

export default function SearchPage(props) {
  const classes = useStyles();
  const [city, setCity] = useState("");
  // const [success, setSuccess] = useState("");

  console.log(city)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fetch = await request.get(`https://stark-mesa-84010.herokuapp.com/api/location/${city}`).set("Authorization", `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTg5OTI4MzI3fQ.SWJ6LOMspdqM2jGcqQLvbjbAVa-EcT2aPaWiBfUX03M`);

    console.log(fetch);
    props.history.push(`/DetailPage/${city}`)
    // setSuccess(true);
  }

// const stateArray = useState("name");
//     console.log({city});
    
// console.log(useState("name"));
  return (
    // <Router>
    //     <Route exact path="/">
    //     {success ? <Redirect to='/DetailPage' />
    //     : 
    //   }
    //   </Route>
    // </Router>
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Search by City
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="city"
              label="City Name"
              name="city"
              autoComplete="city"
              autoFocus
              onChange={e => setCity(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Search
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
  );
}
