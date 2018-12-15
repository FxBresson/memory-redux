import { connect } from 'react-redux'
import { toggleCard } from '../actions'
import Board from '../components/Board'

const mapDispatchToProps = dispatch => ({
    toggleCard: id => dispatch(toggleCard(id))
})

export default connect(
    mapDispatchToProps
)(Board)