import React, { useState, useEffect } from "react"
import request from "superagent"
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MenuItem from '@material-ui/core/MenuItem'
import DatePicker from 'react-date-picker'
import Checkbox from '@material-ui/core/Checkbox'
import { makeStyles } from '@material-ui/core/styles'
import Post from "./Post.js"
import { Container } from "@material-ui/core"
import Button from '@material-ui/core/Button'
import NoteForm from './NoteForm'


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
    const url = "https://stark-mesa-84010.herokuapp.com";
    const notesEnd = '/api/notes'
    const cityEnd = '/api/saved-locations'

    let [notes, setNotes] = useState([]) //How to make this re-render after something is posted?
    

    useEffect(() => {
        try {
            async function fetchNotes() {
                //Retrieve the users notes if there are any
                const fetchedData = await request.get('https://stark-mesa-84010.herokuapp.com/api/notes').set("Authorization", token)
                setNotes(fetchedData.body)
            }
            fetchNotes()
            // getCities()
        } catch (e) {
            console.error(e)
        }
    }, []);


    return (
        <div>
            <NoteForm token={props.token} />
            {notes.length === 0 ? (
                    <p>Add some notes!</p>
                ) : (
                        <div>
                            {console.log(notes[0].title)}
                            {notes.map((note) => (
                                <Post
                                    key={note.title}
                                    post={note}
                                />
                            ))}
                        </div>
                    )
                }


        </div>
    );
}
