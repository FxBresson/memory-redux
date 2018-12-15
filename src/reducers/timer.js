const initialState = {
    running: false,
    time: 0
};

const timer = (state = initialState, action) => {
    switch (action.type) {
        case 'START':
            return {
                ...initialState,
                running: true,
                offset: action.offset,
            };
        case 'STOP':
            return {
                running: false,
                time: state.time
            };
        case 'TICK':
            return {
                ...state,
                time: state.time + (action.time - state.offset),
                offset: action.time
            };

        default:
            return state;
    }
};
  
export default timer