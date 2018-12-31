/**
 * Card Logic
 */
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

            // Duplicated the cards
            temp = [...temp.map(card => { return {...card, id:card.id+'_A' } }),
                    ...temp.map(card => { return {...card, id:card.id+'_B' } })]

            // Shuffle card
            let shuffle = require('shuffle-array')
            temp = shuffle(temp, { 'copy': true });

            return temp

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
