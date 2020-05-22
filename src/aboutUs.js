import React, { Component } from 'react'
import kPhoto from './kigers.jpg'
import mPhoto from './melisa.jpg'
import Card from './aboutUsCard'

import './aboutUs.css'


export default class aboutUs extends Component {

    render() {
        return (
            <div>
                <ul>
                    <Card name={'Nikki'}
                        alt={'space the finial frontear'}
                        photo={kPhoto}
                        detail={"Nikki, Wishing on stars and VScode"} />
                        <Card name={'Melissa'}
                        alt={'space the finial frontear'}
                        photo={mPhoto}
                        detail={"space, there is a lot of it"} />
                        <Card name={'Rachel'}
                        alt={'space the finial frontear'}
                        photo={mPhoto}
                        detail={"Earth-bound alien."} />
                        <Card name={'Langston'}
                        alt={'space the finial frontear'}
                        photo={mPhoto}
                        detail={"There is so much about me to know"} />


                </ul>
            </div>
        )
    }
}
