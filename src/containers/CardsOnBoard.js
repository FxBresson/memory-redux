import { connect } from 'react-redux'
import { toggleCard } from '../actions'
import Board from '../components/Board'

const mapStateToProps = state => ({
    cards: state.cards
})

const mapDispatchToProps = dispatch => ({
    toggleCard: id => dispatch(toggleCard(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)