import React from 'react'
import Typography from '@material-ui/core/Typography';
import './aboutUsCard.css';
import useStyles from './theme';


export default function AboutUsCard(props) {
const classes = useStyles();
    return (
            <div chassName={classes.paper} >
                <li className="AboutUsStyle">
                    <div className="immageContainer">
                    <h2>{props.name}</h2>
                    <div className="immageContatin">
                    <img alt={props.alt}
                        src={props.photo}></img>
                    </div> 
                        <Typography>{props.detail}</Typography>
                    </div>
            </li>
            </div>
        )
    
}
