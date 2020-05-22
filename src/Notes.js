import React, { useState, useEffect } from "react"
import request from "superagent"

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
            
            <NoteForm token={props.token} updateNotes={setNotes}/>
            {notes.length === 0 ? 
                <p>Add some notes!</p>
                : (
                    <div>
                        {/* {console.log(notes[0].title)} */}
                        {console.log(notes)}
                        {notes.map((note) => (
                            
                            <Post
                                key={`${note.title}, ${note.body}`}
                                post={note}
                                token={token}
                                updateNotes={setNotes}
                            />
                        ))}
                    </div>
                )
            }

        </div>
    );
}
