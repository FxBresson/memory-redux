const cards = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_CARDS': 
            return action.cards.map(
                card => {
                    return{
                        id: card.code,
                        toggled: false
                    } 
                }
            )
            
        case 'TOGGLE_CARD': 
            return state.map(
                card => 
                    card.id === action.id ? {...card, toggled: !card.toggled} : card
            )

        default:
            return state
    }
}
  
export default cards
