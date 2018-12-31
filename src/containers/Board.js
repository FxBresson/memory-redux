/**
 * Board Container
 */

import { connect } from 'react-redux'
import { toggleCard, verifyCouple } from '../actions'
import Board from '../components/Board'

const mapStateToProps = state => ({
    cards: state.cards
})

const mapDispatchToProps = dispatch => ({
    toggleCard: (id , cards) => {
        // Toggle the card if is not already toggled, and if 0 or 1 not found card is already toggled 
        if (cards.filter(card => card.toggled === true).length - cards.filter(card => card.found === true).length < 2 
        && !cards.find(card => card.id === id).toggled) {
            dispatch(toggleCard(id))
            dispatch(verifyCouple(cards, id))
        }
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)