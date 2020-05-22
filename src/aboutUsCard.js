import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import './aboutUsCard.css';


export default class aboutUsCard extends Component {
    render() {
        return (
            <div>
            <li className="AboutUsStyle">
                    <div className="immageContainer">
                    <h2>{this.props.name}</h2>
                    <div className="immageContatin">
                        <img alt={this.props.alt}
                        src={this.props.photo}></img>
                    </div> 
                        <Typography>{this.props.detail}</Typography>
                    </div>
            </li>
            </div>
        )
    }
}
