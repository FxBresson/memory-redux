import { createStore } from 'redux'
// import { Timer } from '../components/Timer'
import timer from '../reducers/timer';

const store = createStore(timer);

store.subscribe(timer);

let interval = null;
store.subscribe(() => {
    if (store.getState().running && interval === null) {
        interval = setInterval(() => {
            store.dispatch({
                type: 'TICK',
                time: Date.now()
            });
        });
    }
    if (!store.getState().running && interval !== null) {
        clearInterval(interval);
        interval = null;
    }
});