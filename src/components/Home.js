import React from 'react'
import PropTypes from 'prop-types'

const Home = ({ fetchDeck }) => (
    <section>
        <p>Choose your level</p>
        <button onClick={() => fetchDeck('easy')}>Easy</button>
        <button onClick={() => fetchDeck('hard')}>Hard</button>
    </section>
)

Home.propTypes = {
    fetchDeck: PropTypes.func.isRequired
}

export default Home