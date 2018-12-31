/**
 * Home Container
 */

import { connect } from 'react-redux'
import { fetchDeck } from '../actions'
import Home from '../components/Home'

const mapStateToProps = state => ({
   
})

const mapDispatchToProps = dispatch => ({
    fetchDeck: (difficulty) => {
        dispatch(fetchDeck(difficulty))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)