import { connect } from 'react-redux'
import { startTimer } from '../actions'
import Timer from "../components/Timer";

const mapStateToProps = state => ({
    timer: state
})

const mapDispatchToProps = (dispatch) => ({
    startTimer: () => { dispatch(startTimer()); },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Timer)