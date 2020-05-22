import React, { Component } from 'react'
import kPhoto from './kigers.jpg'
import Card from './aboutUsCard';
import './aboutUs.css'

export default class aboutUs extends Component {
    render() {
        return (
            <div>
                <ul>
                    <Card name={'kigers'}
                        alt={'space the finial frontear'}
                        photo={kPhoto}
                        detail={"Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod"} 
                    />
                </ul>
            </div>
        )
    }
}
