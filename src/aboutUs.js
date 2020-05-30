import React, { Component } from 'react'
import kPhoto from './kigers.jpg'
import mPhoto from './melisa.jpg'
import Card from './aboutUsCard'

import './aboutUs.css'
//th about page

export default class aboutUs extends Component {

    render() {
        return (
            <div>
                <ul>
                    {/* Very nicely componentized! It seems like it would have been nice to have an array of data, then map over it to generate these Cards */}
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
