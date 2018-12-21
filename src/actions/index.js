import fetch from 'cross-fetch'

export const play = (difficulty) => ({
    type: 'LAUCH_GAME',
    difficulty: difficulty
})

export const endGame = () => ({
    type: 'END_GAME'
})

export const restart = () => ({
    type: 'RESTART_GAME'
})

export const receiveCards = (cards) => ({
    type: 'RECEIVE_CARDS',
    cards: cards
})

export const toggleCard = id => ({
    type: 'TOGGLE_CARD',
    id
})

export const foundCard = id => ({
    type: 'FOUND_CARD',
    id
})

export const startTimer = () => ({
    type: 'START_TIMER',
    time: 0
});

export const stopTimer = time => ({
    type: 'STOP_TIMER',
    time: time
});

// FUNCTIONS
export function verifyCouple(cards, id) {
    return function(dispatch) {
        let temp = cards.filter(card => card.toggled && !card.found)
        if ( temp.length === 1 ) {
            if (temp[0].value === cards.find(c => c.id === id).value) {
                dispatch(foundCard(temp[0].id))
                dispatch(foundCard(id))

                if (cards.filter(card => card.found).length === cards.length - 2) {
                    setTimeout(() => {
                        dispatch(endGame())
                    }, 1000)
                }
            } else {
                setTimeout(() => {
                    dispatch(toggleCard(temp[0].id))
                    dispatch(toggleCard(id))
                }, 1000)
            }
        }
    }
}

export function fetchCards(idDeck, difficulty) {
    let nbCards = difficulty === 'easy' ? 1 : 10
    return function(dispatch) {  
      return fetch(`https://deckofcardsapi.com/api/deck/${idDeck}/draw/?count=${nbCards}`)
        .then(
          response => response.json(),
          error => console.log('Can not get cards.', error)
        )
        .then(json => {
          dispatch(receiveCards(json.cards)) 
          dispatch(play(difficulty)) 
        })
    }
}

export function fetchDeck(difficulty) {
    return function(dispatch) {  
      return fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
        .then(
          response => response.json(),
          error => console.log('Can not get deck.', error)
        )
        .then(json => {
            dispatch(fetchCards(json.deck_id, difficulty)) 
        })
    }
}

