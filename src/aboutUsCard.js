import React from 'react'
import Typography from '@material-ui/core/Typography';
import './aboutUsCard.css';
import useStyles from './theme';



export default function AboutUsCard(props) {
const classes = useStyles();
    return (
            <div  >
                <li className="AboutUsStyle">
                    <div className="imageContainer">
                    <h2>{props.name}</h2>
                    <div className="imageContainer">
                    <img alt={props.alt}
                        src={props.photo}></img>
                    </div> 
                        <Typography>{props.detail}</Typography>
                    </div>
                </li>
            </div>
        )
    
}
