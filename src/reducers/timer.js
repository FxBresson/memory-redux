const initialState = {
    start: undefined,
    stop: undefined,
    baseTime: undefined
};

const timer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_TIMER':
            return {
                ...state,
                baseTime: action.baseTime,
                start: action.now,
                stop: undefined
            };
        case 'STOP_TIMER':
            return {
                ...state,
                stop: action.now
            };
        default:
            return state;
    }
};

export default timer;