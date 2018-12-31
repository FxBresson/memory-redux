/**
 * End Screen Container
 */

import { connect } from 'react-redux'
import EndScreen from '../components/EndScreen'
import { restart } from '../actions'

const mapStateToProps = state => ({
   history: state.gameLogic.history
})

const mapDispatchToProps = dispatch => ({
    restart: () => {
        dispatch(restart())
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EndScreen)