import React from 'react'
import { createStore } from 'redux'
import timer from '../reducers/timer';

const store = createStore(timer);

export class Timer extends React.Component {
    constructor() {
        super();
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
    }


    start() {
        store.dispatch({
            type: 'START',
            offset: Date.now(),
        });
    }

    stop() {
        store.dispatch({
            type: 'STOP'
        });
    }

    format(time) {
        const pad = (time, length) => {
            while (time.length < length) {
                time = '0' + time;
            }
            return time;
        };

        time = new Date(time);
        let m = pad(time.getMinutes().toString(), 2);
        let s = pad(time.getSeconds().toString(), 2);
        let ms = pad(time.getMilliseconds().toString(), 3);

        return `${m} : ${s} . ${ms}`;
    }

    render() {
        return (
            <div>
                <h1>Time: {this.format(this.props.time)}</h1>
                <button onClick={this.props.running ? this.stop : this.start}>
                    { this.props.running ? 'Stop' : 'Start' }
                </button>
            </div>
        );
    }
}