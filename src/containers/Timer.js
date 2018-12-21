import { connect } from 'react-redux'
import { startTimer, stopTimer } from '../actions'
import { Timer } from "../components/Timer";

const mapStateToProps = state => ({
    timer: state
})

const mapDispatchToProps = (dispatch) => ({
    startTimer: () => { dispatch(startTimer()); },
    stopTimer: () => { dispatch(stopTimer()); },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Timer)