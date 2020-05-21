import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import request from 'superagent';

export default function StarredListPage(props) {
  // retrieve token for API call -- first try from props, then from localStorage if prop unset (ex. page refresh)
  const token = props.token || localStorage.getItem('TOKEN')

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
                  <p>
                    <a href={`/DetailPage/${location.city},%20${location.state}`}>
                      {location.city}, {location.state}
                    </a>
                  </p>
                  <Button onClick={() => handleDelete(location)}>Remove from favorites</Button>
                </div>
              })
            }
        </Container>
      </Container>
  );
}
