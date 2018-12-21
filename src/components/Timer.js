import React from 'react'
import PropTypes from 'prop-types'

const Timer = ({ onClick, time }) => (
    <div>
        <p>Time: {time}</p>
        <button onClick={onClick}>Start</button>
    </div>
)

Timer.propTypes = {
    onClick: PropTypes.func.isRequired
}

// function timerRunning() {
//     // return function(dispatch) {
//         let time = 0
//         setTimeout(() => {
//             time++
//         }, 1000)
//     // }
//     return time
// }

export default Timer
