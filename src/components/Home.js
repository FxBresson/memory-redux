import React from 'react'
import PropTypes from 'prop-types'

const Home = ({ fetchDeck }) => (
    <section className='difficulty'>
        <p>Choose your level</p>
        <button className='btn btn-easy' onClick={() => fetchDeck('easy')}>Easy</button>
        <button className='btn btn-hard' onClick={() => fetchDeck('hard')}>Hard</button>
    </section>
)

Home.propTypes = {
    fetchDeck: PropTypes.func.isRequired
}

export default Home