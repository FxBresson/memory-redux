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

export const foundCard = id => ({
    type: 'FOUND_CARD',
    id
})

export const receiveCards = (cards) => ({
    type: 'RECEIVE_CARDS',
    cards: cards
})

export const startTimer = (baseTime = 0) => ({
    type: 'START_TIMER',
    baseTime: baseTime,
    now: new Date().getTime()
});

export const stopTimer = () => ({
    type: 'STOP_TIMER',
    now: new Date().getTime()
});


// FUNCTIONS
export function verifyCouple(cards, id) {
    return function(dispatch) {
        // UNDEFINED ?
        console.log(cards)
        console.log('test')
        setTimeout(() => {
            let temp = cards.filter(card => card.toggled && !card.found)
            console.log(temp)
            if ( temp.length === 1 ) {
                if (temp[0].value === cards.find(c => c.id === id).value) {
                    dispatch(foundCard(temp[0].id))
                    dispatch(foundCard(id))
                } else {
                    dispatch(toggleCard(temp[0].id))
                    dispatch(toggleCard(id))
                }
            }
        }, 1000)
    }
}

export function fetchCards(idDeck) {
    return function(dispatch) {  
      return fetch(`https://deckofcardsapi.com/api/deck/${idDeck}/draw/?count=52`)
        .then(
          response => response.json(),
          error => console.log('Can not get cards.', error)
        )
        .then(json => {
          dispatch(receiveCards(json.cards)) 
        })
    }
}

export function fetchDeck() {
    return function(dispatch) {  
      return fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
        .then(
          response => response.json(),
          error => console.log('Can not get deck.', error)
        )
        .then(json => {
            dispatch(fetchCards(json.deck_id)) 
        })
    }
}