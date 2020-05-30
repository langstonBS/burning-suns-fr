import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import request from 'superagent';
import useStyles from './theme';

export default function StarredListPage(props) {
  const classes = useStyles();
  // retrieve token for API call -- first try from props, then from localStorage if prop unset (ex. page refresh)
  const token = props.token || localStorage.getItem('TOKEN')

  const [savedLocations, setSavedLocations] = useState([])

  async function getUserSaves() {
    const response = await request.get(`${process.env.REACT_APP_URL}/saved-locations`).set("Authorization", token)
    console.log(response.body)

    setSavedLocations(response.body)
  }

  useEffect(() => {
    getUserSaves()
    // setSavedLocations(exampleSaves)
  },[])

  const handleDelete = async (saveObject) => {
    // send object for deletion
    await request.delete(`${process.env.REACT_APP_URL}/saved-locations`, saveObject).set("Authorization", token)

    // re-render page with updated save data
    const response = await request.get(`${process.env.REACT_APP_URL}/saved-locations`).set("Authorization", token)
    setSavedLocations(response.body)
  }

  return (
    <Container component="main" className={classes.paper} maxWidth="xs">
        <Container component="section">
            <Typography component="h1" variant="h5">
                Your favorite stargazing spots
            </Typography>
            {
              !savedLocations[0]
              ? <Typography component="p">No saved locations!</Typography>
              : savedLocations.map(location => {
                return <div>
                  <p>
                    <a href={`/DetailPage/${location.city},%20${location.state}`}>
                      {location.city}, {location.state}
                    </a>
                  </p>
                  {/* great work on this dynamic callback! */}
                  <Button onClick={() => handleDelete(location) }>Remove from favorites</Button>
                </div>
              })
            }
        </Container>
      </Container>
  );
}
