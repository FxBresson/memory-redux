const gameLogic = (state = [], action) => {
    switch (action.type) {
        case 'LAUCH_GAME':
            return {
                ...state,
                difficulty: action.difficulty,
                status: 'game',
                startTime: Date.now(),
                time: 0
            }
        case 'END_GAME': 
            let endTime = Date.now();
            let time = endTime - state.startTime;

            return {
                ...state,
                status: 'end',
                time: time
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