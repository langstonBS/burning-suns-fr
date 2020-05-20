import React, { useState, useEffect } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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

  const [city, setCity] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
        console.log('Rendered!')

        async function renderDetails() {
            const fetch = await request.get(`https://stark-mesa-84010.herokuapp.com/api/weather/${cityName}`).set("Authorization", `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTg5OTI4MzI3fQ.SWJ6LOMspdqM2jGcqQLvbjbAVa-EcT2aPaWiBfUX03M`);

            setCity(cityName)
            setData(fetch.body.current)
            // data.push(fetch.body.current)
        }
        
        renderDetails()
    }, [])
    
    // console.log('FETCH:', fetch.body.current);
    console.log('DATA STATE:', data)
    console.log('CITY STATE:', city)
  
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
              data
              ? <Typography component="p">
                    Cloud cover: {data.cloudcover}
                </Typography>
            : <Typography component="p">
                Cloud cover: 
            </Typography>
          }
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
  );
}
