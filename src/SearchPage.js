import React, { useState, useEffect } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import request from 'superagent';

import useStyles from './theme'

export default function SearchPage(props) {
  const classes = useStyles()

  const [query, setQuery] = useState("");
  const [fetch, setFetch] = useState();
  const [badSearch, setBadSearch] = useState();
  const [error, setError] = useState(false);

  // console.log(city)

  useEffect(() => {
    if (fetch && !badSearch) props.history.push(`/DetailPage/${query}`) // nice redirect!
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // remove any "bad search" text from view, to prevent confusion for the user
    setError(false)
    setBadSearch()

    // test the submitted query with an API call, to make sure it's able to find a location in the dataset
    const fetch = await request.get(`${process.env.REACT_APP_URL}location/${query}`).set("Authorization", props.token);

    console.log(fetch);
    
    // if the fetch returns no body, show "bad search" text; otherwise, setFetch for redirect
    if (!fetch.body) {
      setError(true)
      setBadSearch('Location not found.')
    } else {
      setFetch(fetch.body)
    }
  }

  return (
    <Container component="main" maxWidth="xs">
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
              onChange={e => setQuery(e.target.value)}
              error={error}
              helperText={badSearch}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >Search
            </Button>
          </form>
        </div>
      </Container>
  );
}
