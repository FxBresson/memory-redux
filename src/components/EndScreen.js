import React from 'react'
import PropTypes from 'prop-types'
import { timeToString, dateToString } from '../Helper'

const EndScreen = ({history, restart}) => (
  <section>
    <table className="m-scoreboard">
      <thead>
        <tr>
          <th>Start Time</th>
          <th>Time</th>
          <th>Difficulty</th>
        </tr>
      </thead>
      <tbody>
        {history.map((game, index) => (
          <tr key={index}>
            <td>{dateToString(game.startTime)}</td>
            <td>{timeToString(game.time)}</td>
            <td>{game.difficulty}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <button className="btn" onClick={restart}>Play again</button>
  </section>
)


EndScreen.propTypes = {
  history: PropTypes.array.isRequired,
  restart: PropTypes.func.isRequired
}


export default EndScreen