import React, { Component } from 'react'
import kPhoto from './kigers.jpg'
import mPhoto from './melisa.jpg'
import Card from './aboutUsCard';
import rPhoto from 'Rachel.jpg'
import './aboutUs.css'

export default class aboutUs extends Component {

    render() {
        return (
            <>
                <ul>
                    <Card name={'Nikki'}
                        alt={'space the finial frontear'}
                        photo={kPhoto}
                        detail={"Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod"} />
                        <Card name={'Melissa'}
                        alt={'space the finial frontear'}
                        photo={rPhoto}
                        detail={"Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod"} />
                        <Card name={'Rachel'}
                        alt={'space the finial frontear'}
                        photo={mPhoto}
                        detail={"Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod"} />
                        <Card name={'Langston'}
                        alt={'space the finial frontear'}
                        photo={mPhoto}
                        detail={"There is so much about me to know"} />

                </ul>
               
            </>
        )
    }
}
