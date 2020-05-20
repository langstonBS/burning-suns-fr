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

  const cityName = props.match.params.city

//   const [city, setCity] = useState("");
  const [currentData, setCurrentData] = useState({});
  const [forecastData, setForecastData] = useState({});
  const [astroData, setAstroData] = useState({});
  const [locData, setLocData] = useState({});

  useEffect(() => {
        console.log('Rendered!')

        async function renderDetails() {
            const locFetch = await request.get(`https://stark-mesa-84010.herokuapp.com/api/location/${cityName}`).set("Authorization", `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTg5OTI4MzI3fQ.SWJ6LOMspdqM2jGcqQLvbjbAVa-EcT2aPaWiBfUX03M`);

            setLocData(locFetch.body)

            const fetch = await request.get(`https://stark-mesa-84010.herokuapp.com/api/weather/${cityName}`).set("Authorization", `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTg5OTI4MzI3fQ.SWJ6LOMspdqM2jGcqQLvbjbAVa-EcT2aPaWiBfUX03M`);

            // setCity(cityName)
            setCurrentData(fetch.body.current)
            setForecastData(fetch.body.forecast['2020-05-19'])
            setAstroData(fetch.body.forecast['2020-05-19'].astro)
            console.log('FETCH:', fetch.body);
            // data.push(fetch.body.current)
        }
        
        renderDetails()
    }, [])
    
    console.log('CURRENT DATA STATE:', currentData)
    console.log('FORECAST DATA STATE:', forecastData)
    console.log('ASTRO DATA STATE:', astroData)
    console.log('LOCATION DATA STATE:', locData)
    // console.log('CITY STATE:', city)
  
  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Details for {cityName}
          </Typography>
          {
              currentData
              ? <Container component="section" maxWidth="xs">
                  <iframe 
                  title="starmap"
                  width="300" 
                  height="350" 
                  frameborder="0" 
                  scrolling="no" 
                  marginheight="0" 
                  marginwidth="0" 
                  src={`https://virtualsky.lco.global/embed/index.html?longitude=${locData.lon}&latitude=${locData.lat}&projection=stereo&constellations=true&constellationlabels=true&meteorshowers=true&live=true`} 
                  allowTransparency="true"></iframe>
                    {/* <iframe 
                        title="starmap" 
                        width="500" 
                        height="350" 
                        frameborder="0" 
                        scrolling="no" 
                        marginheight="0" 
                        marginwidth="0" 
                        src={`http://slowe.github.io/VirtualSky/embed?longitude=${locData.lon}&latitude=${locData.lat}&projection=stereo`} 
                        allowTransparency="true" /> */}
                    <Typography component="p">
                            Cloud cover: {currentData.cloudcover} <br/>
                            Moonrise: {astroData.moonrise} <br />
                            Max temp: {forecastData.maxtemp} <br />
                    </Typography>
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
