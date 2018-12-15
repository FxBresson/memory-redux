import fetch from 'cross-fetch'

export const addCard = (id, image) => ({
    type: 'ADD_CARD',
    id,
    image
})

export const toggleCard = id => ({
    type: 'TOGGLE_CARD',
    id
})



//TEST
export const receiveDeck = (json) => ({
    type: 'RECEIVE_DECK',
    // idDeck: json.data.children.map(child => child.data)
    idDeck: json.deck_id
})


export function fetchDeck() {
    return function(dispatch) {  
      return fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
        .then(
          response => response.json(),
          error => console.log('An error occurred.', error)
        )
        .then(json => 
          dispatch(receiveDeck(json)) 
        )
    }
  }