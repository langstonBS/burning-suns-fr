import React, { useState, useEffect } from "react";
import request from "superagent";
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Post from "./Post.js";
import { Container } from "@material-ui/core";
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    }
}));

export default function NotesPage(props) {
    const classes = useStyles();
    //Temporary data for the notes
    const token = props.token;
    //Set api endpoint for notes here
    const url = "https://stark-mesa-84010.herokuapp.com/api/notes";
    let [notes, setNotes] = useState([]);
    const [lat, setLat] = useState(""); //Need to decide if these are derived from selected city or not
    const [lon, setLon] = useState(""); //Need to decide if these are derived from selected city or not
    const [city, setCity] = useState("Selected City"); //Might not need this or lat lon (if can use endpoint to match or can keep tracking in fe)
    const [date, setDate] = useState(""); //Will want this value to listen to a dropdown from calendar library
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [wish, setWish] = useState(false);
    const [starredCities, setStarredCities] = useState(['CITIES PLACEHOLDER'])

    useEffect(() => {
        try {
            async function fetchNotes() {
                //Retrieve the users notes if there are any
                const fetchedData = await request.get(url).set("Authorization", token);
                console.log(fetchedData);
                setNotes(fetchedData.body);
            }
            fetchNotes();
        } catch (e) {
            console.error(e);
        }
    }, []);

    const postNote = async (e) => {
        e.preventDefault();
        try {
            const posted = await request
                .post(url, { lat, lon, city, date, title, body, wish })
                .set("Authorization", token);
            notes = posted.body; //need to verify that it returns all the notes in the body
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            {/*Need to add a dropdown button (that expands into form) */}
            <Container component='main' maxWidth='xs'>
                <div classname={classes.paper}>
                    <Typography variant="h6" gutterBottom>
                        Add a Note
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
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    helperText="Please select from your starred cities"
                                >
                                    {starredCities.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControlLabel
                                    control={<Checkbox
                                        color="secondary"
                                        name="saveCard"
                                        checked={wish}
                                        onChange={(e) => setWish(e.target.checked)} />}
                                    label="Save as a wish"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                Date Picker [INSERT HERE]
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-textarea"
                                    label="Text body"
                                    placeholder="Placeholder"
                                    multiline
                                    fullWidth
                                    variant="outlined"
                                    value={body}
                                    onChange={(e) => setBody(e.target.value)}
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
                                    Sign Up
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>

            {notes.length === 0 ? (
                <p>Add some notes!</p>
            ) : (
                    <div>
                        <p>Map some notes</p>
                        {notes.map((note) => (
                            <Post
                                title={note.title}
                                date={note.date}
                                description={note.body}
                                image={""}
                                imageTitle={"blank image"}
                            />
                        ))}
                    </div>
                )}
        </div>
    );
}
