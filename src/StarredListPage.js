import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import request from 'superagent';

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

export default function StarredListPage(props) {
  // retrieve token for API call -- first try from props, then from localStorage if prop unset (ex. page refresh)
  const token = props.token || localStorage.getItem('TOKEN')

  const exampleSaves = [
    {
      city: 'Portland',
      state: 'Oregon',
      lat: '45.524',
      lon: '-122.675'
    },
    {
      city: 'Sacramento',
      state: 'California',
      lat: '38.5816',
      lon: '-121.4944'
    }
  ]

  const [savedLocations, setSavedLocations] = useState([])

  async function getUserSaves() {
    const response = await request.get('https://stark-mesa-84010.herokuapp.com/api/saved-locations').set("Authorization", token)
    console.log(response.body)

    setSavedLocations(response.body)
  }

  useEffect(() => {
    getUserSaves()
    // setSavedLocations(exampleSaves)
  },[])

  const handleDelete = async (saveObject) => {
    // send object for deletion
    await request.delete('https://stark-mesa-84010.herokuapp.com/api/saved-locations', saveObject).set("Authorization", token)

    // re-render page with updated save data
    const response = await request.get('https://stark-mesa-84010.herokuapp.com/api/saved-locations').set("Authorization", token)
    setSavedLocations(response.body)
  }

  return (
    <Container component="main" maxWidth="xs">
        <Container component="section">
            <Typography component="h1" variant="h5">
                Your favorite stargazing spots
            </Typography>
            {
              !savedLocations[0]
              ? <Typography component="p">No saved locations!</Typography>
              : savedLocations.map(location => {
                return <div>
                  <p>{location.city}, {location.state}</p>
                  <Button onClick={() => handleDelete(location)}>Remove from favorites</Button>
                </div>
              })
            }
        </Container>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
  );
}
