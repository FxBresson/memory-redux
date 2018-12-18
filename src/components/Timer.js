import React from 'react'

export class TimerComponent extends React.Component {
    constructor() {
        super();
    }

    render() {
        function getElapsedTime(baseTime, start, stop = new Date().getTime()) {
            return (!start) ? 0 : stop - start + baseTime;
        }

        const { baseTime, start, stop } = this.props;
        const elapsed = getElapsedTime(baseTime, start, stop);

        return (
            <div>
                <p>Time: {elapsed}</p>
                <button onClick={() => this.props.startTimer(elapsed)}>Start</button>
                <button onClick={() => this.props.stopTimer()}>Stop</button>
            </div>
        );
    }
}
