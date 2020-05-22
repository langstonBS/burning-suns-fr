import React, { useState, useEffect } from "react"
import request from "superagent"
import Grid from '@material-ui/core/Grid'
import Post from "./Post.js"
import NoteForm from './NoteForm'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box';
import useStyles from './theme'

export default function NotesPage(props) {
    const token = props.token;
    const classes = useStyles();
    const [notes, setNotes] = useState([])
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
        try {
            async function fetchNotes() {
                //Retrieve the users notes if there are any
                const fetchedData = await request.get('https://stark-mesa-84010.herokuapp.com/api/notes').set("Authorization", token)
                setNotes(fetchedData.body)
            }
            fetchNotes()
        } catch (e) {
            console.error(e)
        }
    }, []);


    return (
        <div>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Add a Note or a Wish</Typography>
                    <Typography className={classes.secondaryHeading}>
                        Expand to enter details</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails mx="auto">
                    <Box mx="auto" bgcolor="background.paper" p={1}>
                    <NoteForm token={props.token} updateNotes={setNotes} />
                    </Box>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <Divider />
            {notes.length === 0 ?
                <p>Add some notes!</p>
                : (
                    <div>
                        <Grid container spacing={4}>
                            {notes.map((note) => (
                                <Post
                                    key={`${note.title}, ${note.body}`}
                                    post={note}
                                    token={token}
                                    updateNotes={setNotes}
                                />
                            ))}
                        </Grid>
                    </div>
                )
            }
        </div>
    );
}
