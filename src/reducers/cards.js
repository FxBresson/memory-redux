const cards = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_CARDS': 
            let temp = action.cards.map(card => {
                return {
                    id: card.code,
                    toggled: false,
                    value: card.code,
                    found: false
                } 
            })

            temp = temp.slice(0, 10);
            temp = [...temp.map(card => { return {...card, id:card.id+'_A' } }),
                    ...temp.map(card => { return {...card, id:card.id+'_B' } })]

            return temp
            // return state.cards = [...state.cards, ...newCards]
        case 'TOGGLE_CARD': 
            return state.map(
                card => 
                    card.id === action.id ? {...card, toggled: !card.toggled} : card
            )

        case 'FOUND_CARD':
            return state.map(
                card => 
                    card.id === action.id ? {...card, found: true} : card
            )

        default:
            return state
    }
}
  
export default cards
