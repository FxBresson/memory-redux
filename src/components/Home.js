import React from 'react'
import PropTypes from 'prop-types'

const Home = ({ play }) => (
    <div>
        <p>Home</p>
        <button onClick={play}>Play</button>
    </div>
)

Home.propTypes = {
    play: PropTypes.func.isRequired
}

export default Home