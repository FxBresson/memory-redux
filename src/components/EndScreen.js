import React from 'react'

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
            <td>{game.startTime}</td>
            <td>{game.time}</td>
            <td>{game.difficulty}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <button onClick={restart}>Play again</button>
  </section>
)

export default EndScreen