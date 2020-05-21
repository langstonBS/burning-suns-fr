import React, { useState, useEffect } from 'react'
import request from 'superagent';
import { useHistory } from 'react-router-dom';

export default function NotesPage(props) {
    //Temporary data for the notes
    const token = props.token
    //Set api endpoint for notes here
    const url = 'https://stark-mesa-84010.herokuapp.com/api/notes'
    const [notes, setNotes] = useState([])


    useEffect(() => {
        try {
            async function fetchNotes() {
                //Retrieve the users notes if there are any
                const fetchedData = await request.get(url).set('Authorization', token)
                console.log(fetchedData)
                setNotes(fetchedData.body)

            }
            fetchNotes()

        } catch (e) {
            console.error(e)
        }
    }, [])


    return (
        <div>
            {notes.length === 0 ?
            <p>Add some notes!</p>
            
            :<p>Map some notes</p>
        }
            
        </div>
    )
}
