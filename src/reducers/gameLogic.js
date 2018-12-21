const gameLogic = (state = [], action) => {
    switch (action.type) {
        case 'LAUCH_GAME':
            return {
                ...state,
                difficulty: action.difficulty,
                status: 'game'
            }
        case 'END_GAME': 
            return {
                ...state,
                status: 'end'
            }
        case 'RESTART_GAME':
            return {
                ...state,
                status: 'difficulty-selection'
            }
      default:
        return state
    }
}
  
export default gameLogic