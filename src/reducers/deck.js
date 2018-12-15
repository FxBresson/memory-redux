const deck = (state = [], action) => {
    switch (action.type) {
        // TEST
        case 'RECEIVE_DECK':
            return [
                ...state,
                {
                    idDeck: action.deck_id,
                }
            ]
        //

        default:
            return state
    }
}
  
export default deck

