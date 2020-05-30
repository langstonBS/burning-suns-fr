
import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'

export default class Sample extends Component {
    state = {
        value: new Date(),
    }

    // nice work figuring out the signature of react-calendar's onChange callback
    onChange = value => this.setState({ value })

    render() {
        const { value } = this.state;
        console.log(value);

        return (
            <div className="Sample">
                <header>
                    <h1>Date of Journal</h1>
                </header>
                {/* nice organization of css class names! */}
                <div className="Sample__container">
                    <main className="Sample__container__content">
                        <Calendar
                            onChange={this.onChange}
                            hover
                            tileContent
                            value={value}
                        />
                    </main>
                </div>
            </div>
        );
    }

}