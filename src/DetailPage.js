import React, { useState, useEffect } from "react";
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import request from 'superagent';
import { Button } from "@material-ui/core";
import useStyles from './theme';
import './DetailPage.css';

export default function DetailPage(props) {
  const classes = useStyles();
  // retrieve token for API call
  const token = props.token || localStorage.getItem('TOKEN')

  // retrieve city name from url param (/:city) for API call
  const cityName = props.match.params.city

  // initialize states for data objects
  const [currentData, setCurrentData] = useState({});
  const [astroData, setAstroData] = useState({});
  const [locData, setLocData] = useState({});
  
  // initialize saveObject -- this is what we post to the favorites endpoint, and compare against user's existing saves
  const [saveObject, setSaveObject] = useState({})
  const [isSaved, setIsSaved] = useState(false)

  // initialize states for window dimensions -- this will be used to resize the star map
  const [chartWidth, setchartWidth] = useState(window.innerWidth * .7)
  const [chartHeight, setchartHeight] = useState(window.innerHeight * .7)

  useEffect(() => {
    // on render, call function to get data objects and set data states
    renderDetails()

    // add event listener to resize star map on window resize
    window.addEventListener('resize', () => {
      setchartWidth(window.innerWidth * .7)
      setchartHeight(window.innerHeight * .7)
    })
    // cleanup function
    return window.removeEventListener('resize', () => {
      setchartWidth(window.innerWidth * .7)
      setchartHeight(window.innerHeight * .7)
    })
  }, [])
  
  const handleSave = async () => {
    await request.post('${process.env.REACT_APP_URL}/api/saved-locations', saveObject).set("Authorization", token)
    setIsSaved(true)
  }

  const handleDelete = async () => {
    await request.delete('${process.env.REACT_APP_URL}/api/saved-locations', saveObject).set("Authorization", token)
    setIsSaved(false)
  }

  return (
      
    <Container component="main" className={classes.paper}>
        <div >
          <Typography  variant="h1" className={classes.title}>
            Details for {locData.name}, {locData.country !== 'United States of America' ? locData.country : locData.region}
          </Typography>

          <Container component="section">
            <Container component="article">
              <Typography component="h1" variant="h5">
                Constellations over {locData.name} on {astroData.date}
              </Typography>

              <iframe 
                  title={`Star Map for ${locData.name}`}
                  width={chartWidth} 
                  height={chartHeight}
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight="0" 
                  marginWidth="0" 
                  src={`https://virtualsky.lco.global/embed/index.html?longitude=${locData.lon}&latitude=${locData.lat}&projection=stereo&constellations=true&constellationlabels=true&meteorshowers=true&live=true`} 
                  allowtransparency="true" />

              <Typography component="p">
                  Star Map created with <Link to="https://slowe.github.io/VirtualSky/">VirtualSky</Link>
              </Typography>

            </Container>
            <Container component="article">

                <Typography component="h1" variant="h5">
                    Stargazing conditions
                </Typography>

                <Typography component="h1" variant="h6">
                    Weather
                </Typography>

                <Typography component="p" variant="h6">
                    Cloud cover: {currentData.cloudcover}%
                </Typography>

                <Typography component="p" variant="h6">
                    Visibility: {currentData.visibility} km
                </Typography>
                <Typography component="p" variant="h6">
                    Precipitation: {currentData.precip}%
                </Typography>

                <Typography component="h1" variant="h6">
                    Astronomic Events
                </Typography>

                <Typography component="p" variant="h6">
                    Sunset will be around {astroData.sunrise}.
                </Typography>

                <Typography component="p" variant="h6">

                    Moonrise will be around {astroData.moonrise}.
                </Typography>
                {
                  !isSaved
                  ? <Button className={classes.submit} onClick={handleSave}>Save to favorites</Button>
                  : <Button className={classes.submit} onClick={handleDelete}>Remove from favorites</Button>
                }
            </Container>
          </Container>
        </div>
      </Container>
  );

  // function to get data objects from APIs

  // wow, this is an advanced and complex piece of hook logic! nice work!
  async function renderDetails() {
    // get the target location data
    const locFetch = await request
      // this stuff could have been stored in and environment variable to save some stress
      // https://create-react-app.dev/docs/adding-custom-environment-variables/
      .get(`${process.env.REACT_APP_URL}/api/location/${cityName}`)
      .set("Authorization", token);

    setLocData(locFetch.body)

    // get the target location's weather data
    const weatherFetch = await request
      .get(`${process.env.REACT_APP_URL}/api/weather/${cityName}`)
      .set("Authorization", token);

    setCurrentData(weatherFetch.body.current)

    // get the target location's astro data
    const astroFetch = await request
      .get(`${process.env.REACT_APP_URL}/api/astro?lat=${locFetch.body.lat}&long=${locFetch.body.lon}`)
      .set("Authorization", token);
      
    setAstroData(astroFetch.body)

    // use the fetched location data to generate save object for larget location
    const newSaveObject = {
      city: locFetch.body.name,
      state: locFetch.body.country !== 'United States of America' ? locFetch.body.country : locFetch.body.region,
      lat: locFetch.body.lat,
      lon: locFetch.body.lon
    }

    setSaveObject(newSaveObject)

    // get the user's current saves
    const savesFetch = await request.get('${process.env.REACT_APP_URL}/api/saved-locations').set("Authorization", token)

    // check whether target location is in saves, based on matching city and "state" (or region) values
    const checkedSave = savesFetch.body.filter(savedLocation => savedLocation.city === newSaveObject.city && savedLocation.state === newSaveObject.state)

    // very cool
    if (checkedSave[0]) { setIsSaved(true) }
  }
}
