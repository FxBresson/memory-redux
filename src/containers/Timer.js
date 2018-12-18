import { connect } from 'react-redux'
import { toggleCard, verifyCouple } from '../actions'
import Board from '../components/Board'

const mapStateToProps = state => ({
    cards: state.cards
})

const mapDispatchToProps = (dispatch) => ({
    toggleCard: (id, cards) => {
        dispatch(toggleCard(id))
        dispatch(verifyCouple(cards, id))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)