import React, { useState, useEffect } from "react"
import request from "superagent"
import Brightness3Icon from '@material-ui/icons/Brightness3';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

import Post from "./Post.js"
import NoteForm from './NoteForm'

export default function NotesPage(props) {
    const token = props.token;

    const [notes, setNotes] = useState([]) //How to make this re-render after something is posted?
    

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
            <StarIcon/>
            <NoteForm token={props.token} updateNotes={setNotes}/>
            {notes.length === 0 ? 
                <p>Add some notes!</p>
                : (
                    <div>
                        {/* {console.log(notes[0].title)} */}
                        {notes.map((note) => (
                            <Post
                                key={`${note.title}, ${note.body}`}
                                post={note}
                            />
                        ))}
                    </div>
                )
            }

        </div>
    );
}
