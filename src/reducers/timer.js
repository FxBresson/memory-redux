const timer = (state = [], action) => {
    switch (action.type) {
        case 'STOP_TIMER':
            return {
                ...state,
                time: action.time
            }
        
        case 'START_TIMER':
            return {
                ...state,
                time: 0
            }

        default:
            return state
    }
};

export default timer