/**
 * Main Container
 */

import { connect } from 'react-redux'
import Main from '../components/Main'

const mapStateToProps = state => ({
    status: state.gameLogic.status
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)