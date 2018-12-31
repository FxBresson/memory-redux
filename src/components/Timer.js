import React from 'react'
import { timerToString } from '../Helper'

class Timer extends React.Component {
    constructor() {
        super()
        this.state = {
            time: 0
		}
		this.intervalHandler = null
    }

    // Count a second
    tick() {
		let newState = Object.assign({}, this.state, {
			time: this.state.time+1
		})
		this.setState(newState);
    }

    componentWillUnmount() {
        clearInterval(this.intervalHandler)
    }
    
    componentDidMount() {
        this.intervalHandler = setInterval(this.tick.bind(this), 1000)
	}

    render() {
        return (
            <div>
                <p>Time: {timerToString(this.state.time)}</p>
            </div>
        )
    }
}

export default Timer
