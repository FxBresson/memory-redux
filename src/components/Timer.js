import React from 'react'

export class Timer extends React.Component {
    constructor() {
        super();
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
                <p>Time: {this.format(this.props.time)}</p>
            </div>
        );
    }
}
