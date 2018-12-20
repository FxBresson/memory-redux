const gameLogic = (state = [], action) => {
    switch (action.type) {
        case 'LAUCH_GAME':
            return {
                ...state,
                difficulty: action.difficulty,
                status: 'game'
            }

      default:
        return state
    }
}
  
export default gameLogic