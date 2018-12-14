import React from 'react'
import PropTypes from 'prop-types'

const Timer = ({ time }) => (
    <p>{ time }</p>
)

Timer.propTypes = {
    time: PropTypes.string.isRequired,
}

export default Timer