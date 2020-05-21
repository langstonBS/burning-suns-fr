import React, { useState, useEffect } from "react";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import request from 'superagent';
import { Button } from "@material-ui/core";

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

export default function DetailPage(props) {
  const classes = useStyles();

  // retrieve token for API call -- first try from props, then from localStorage if prop unset (ex. page refresh)
  const token = props.token || localStorage.getItem('TOKEN')

  // retrieve city name from url param (/:city) for API call
  const cityName = props.match.params.city

  // generate date string for munging forecast data; the goal is to give the user an idea of what the IRL stargazing conditions would be in the chosen area on that night
  // NOTE: on free plan, Weatherstack only returns forecast for the previous day, but I figure this is fine for our MVP as a proof of concept.
  const todaysDate = () => {
    // to access Weatherstack data object, we need a string in this format: 'YYYY-MM-DD'
    // first, get the current date
    const today = new Date(Date.now())

    // then, pull out values for year/month/day
    const year = today.getFullYear()

    // both getMonth() and getDate() return an integer, but our date string will need a leading zero before any single-digit integer
    // to achieve that, we convert the integer to a string, then use the String method padStart() to add a leading zero before any single-digit integer
    const month = (today.getMonth() + 1) // getMonth() works on base-zero (January is 0), which means we need to add 1 to get the human-understandable number
        .toString()
        .padStart(2, 0)
    const date = (today.getDate() - 1) // because we can only access yesterday's data on the free plan, we need to subtract 1 from today's date
        .toString()
        .padStart(2, 0)

    return `${year}-${month}-${date}`
  }

  // initialize states for data objects
  const [currentData, setCurrentData] = useState({});
  const [forecastData, setForecastData] = useState({});
  const [astroData, setAstroData] = useState({});
  const [locData, setLocData] = useState({});
  
  // initialize saveObject -- this is what we post to the favorites endpoint, or compare against user's existing saves
  const [saveObject, setSaveObject] = useState({})

  // declare function to get data objects from APIs
  async function renderDetails() {
    const locFetch = await request.get(`https://stark-mesa-84010.herokuapp.com/api/location/${cityName}`).set("Authorization", token);

    setLocData(locFetch.body)

    const newSaveObject = {
      city: locFetch.body.name,
      state: locFetch.body.region,
      lat: locFetch.body.lat,
      lon: locFetch.body.lon
    }

    const checkedSave = exampleSaves.filter(savedLocation => {
      return savedLocation.city === newSaveObject.city && savedLocation.state === newSaveObject.state
    })

    if (checkedSave[0]) { setIsSaved(true) }

    setSaveObject(newSaveObject)

    const fetch = await request.get(`https://stark-mesa-84010.herokuapp.com/api/weather/${cityName}`).set("Authorization", token);

    setCurrentData(fetch.body.current)
    setForecastData(fetch.body.forecast[todaysDate()])
    setAstroData(fetch.body.forecast[todaysDate()].astro)
    // console.log('FETCH:', fetch.body);
  }

  ////// save-handling

  // example saved data
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

  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    console.log('Rendered!')

    // call function to get data objects and set data states
    renderDetails()
      // .then(() => {
      //   const checkedSave = exampleSaves.filter(savedLocation => {
      //     return savedLocation.city === saveObject.city && savedLocation.state === saveObject.state
      //   })
    
      //   if (checkedSave[0]) { setIsSaved(true) }
      // })

  }, [])

  // compare saveObject against current array of save objects, set isSaved to true if found
  // if (saveObject.city) {
  //   const checkedSave = exampleSaves.filter(savedLocation => {
  //     return savedLocation.city === saveObject.city && savedLocation.state === saveObject.state
  //   }
  
  //   if (checkedSave[0]) { setIsSaved(true) }
  // }

  // if (exampleSaves.includes(saveObject)) {console.log('saved!')}
  // else {console.log('not saved!')}

  console.log('Current save object:', saveObject)
  console.log('Current saved state:', isSaved)
  // console.log('Matching save object', checkedSave)
  // console.log('CURRENT DATA STATE:', currentData)
  // console.log('FORECAST DATA STATE:', forecastData)
  // console.log('ASTRO DATA STATE:', astroData)
  // console.log('LOCATION DATA STATE:', locData)
  
  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Details for {locData.name}, {locData.region}
          </Typography>
          {
              currentData
              ? <Container component="section" maxWidth="xs">

                  <Container component="article">
                    <iframe 
                        title={`Star Map for ${locData.name}`}
                        width="300" 
                        height="350" 
                        frameborder="0" 
                        scrolling="no" 
                        marginheight="0" 
                        marginwidth="0" 
                        src={`https://virtualsky.lco.global/embed/index.html?longitude=${locData.lon}&latitude=${locData.lat}&projection=stereo&constellations=true&constellationlabels=true&meteorshowers=true&live=true`} 
                        allowTransparency="true" />
                    <Typography component="p">
                        Star Map created with <Link to="https://slowe.github.io/VirtualSky/">VirtualSky</Link>
                    </Typography>
                  </Container>

                  <Container component="article" maxWidth="xs">
                      <Typography component="h1" variant="h6">
                          Stargazing conditions
                      </Typography>

                      <Typography component="p">
                          Average temperature: {forecastData.avgtemp} Celsius
                      </Typography>
                      <Typography component="p">
                          Cloud cover: {currentData.cloudcover}%
                      </Typography>
                      <Typography component="p">
                          Sunset will be around {astroData.sunrise}.
                      </Typography>
                      <Typography component="p">
                          Moonrise will be around {astroData.moonrise}.
                      </Typography>

                      <Button>Add this </Button>
                      
                  </Container>

              </Container>
            : <Typography component="p">
                Loading...
            </Typography>
          }
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
  );
}
