const card = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CARD': 
            return [
                ...state,
                {
                    id: action.id,
                    toggled: false,
                    image: action.image
                }
            ]
            
        case 'TOGGLE_CARD': 
            return state.map(
                card => 
                    card.id === action.id ? {...card, toggled: !card.toggled} : card
            )

        default:
            return state
    }
}
  
export default card
