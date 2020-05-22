import React, { useState, useEffect } from 'react'
import request from "superagent"
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MenuItem from '@material-ui/core/MenuItem'
import DatePicker from 'react-date-picker'
import Checkbox from '@material-ui/core/Checkbox'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from "@material-ui/core"
import Button from '@material-ui/core/Button'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import moment from 'moment'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.v
        marginTop: theme.spacing(3),
    }
}));


export default function NoteForm(props) {
    const classes = useStyles();
    //Temporary data for the notes
    const token = props.token;
    //Set api endpoint for notes here
    const url = "https://stark-mesa-84010.herokuapp.com";
    const notesEnd = '/api/notes'
    const cityEnd = '/api/saved-locations'
    
    const [date, setDate] = useState(new Date()) //Listens to dropdown from datePicker
    const [title, setTitle] = useState("") //Set in the note form
    const [body, setBody] = useState("") //Set in the note form
    const [wish, setWish] = useState(false) //Set in the note form by the checkbox
    const [error, setError] = useState('') //Only set if form validation is flagged

    const [starredCities, setStarredCities] = useState(['']) //Queried from the database

    const [locObj, setLocObj] = useState('') //Set from the dropdown of the starred cities

    useEffect(() => {
        try {
            getCities()
        } catch (e) {
            console.error(e)
        }
    }, []);

    const getCities = async (e) => {
        try {
            const fetched = await request.get(url + cityEnd).set("Authorization", token)
            setStarredCities(fetched.body)
        } catch (e) {
            console.error(e)
        }
    }

    
    const postNote = async (e) => {
        
        e.preventDefault();
        console.log(props)
        if (title === '') {
            setError('please enter a title')
        }
        if (body === '') {
            setError('please add some text to the message')
        }
        try {
            const posted = await request
                .post( url + notesEnd, { lat:locObj.lat, 
                    lon:locObj.lon, 
                    city:locObj.city+', '+locObj.state, date:moment(date, 'MM-DD-YYYY').format('ll'), title, body, wish })
                .set("Authorization", token);
            const notes = await request.get('https://stark-mesa-84010.herokuapp.com/api/notes').set("Authorization", token)
            props.updateNotes(notes.body)
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <Container component='main' maxWidth='xs'>
                <div className={classes.paper}>
                    <Typography variant="h6" gutterBottom>
                        Add a {wish ? 'Wish' : 'Note'}
                    </Typography>
                    <form className={classes.form} onSubmit={postNote}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-title"
                                    label="Title"
                                    fullWidth
                                    variant="outlined"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="standard-select-city"
                                    select
                                    label="Select"
                                    value={locObj}
                                    onChange={(e) => setLocObj(e.target.value)}
                                    helperText="Please select from your starred cities"
                                >
                                    {starredCities.map((option) => (
                                        <MenuItem
                                            key={`${option.city}, ${option.state}`}
                                            value={option}>
                                            {`${option.city} , ${option.state}`}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControlLabel
                                    control={<Checkbox
                                        color="secondary"
                                        name="saveCard"
                                        icon={<StarBorderIcon/>}
                                        checkedIcon={<StarIcon />}
                                        checked={wish}
                                        onChange={(e) => setWish(e.target.checked)} />}
                                    label="Save as a wish"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <DatePicker
                                    onChange={setDate}
                                    value={date}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-textarea"
                                    label="Message"
                                    placeholder="Add text here"
                                    multiline
                                    fullWidth
                                    variant="outlined"
                                    value={body}
                                    onChange={(e) => setBody(e.target.value)}
                                    helperText={error}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Add {wish ? 'Wish' : 'Note'}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>

            </Container>

        </div>
    )
}
