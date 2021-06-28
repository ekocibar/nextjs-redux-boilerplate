import { createAction, handleActions } from 'redux-actions'

/**
 * Constants
 */
export const INCREASE_COUNTER = 'INCREASE_COUNTER'; // Add 1 to counter
export const DECREASE_COUNTER = 'DECREASE_COUNTER'; // Subtract 1 from counter

/**
 * Actions
 */
export const increaseCounter = createAction(INCREASE_COUNTER)
export const decreaseCounter = createAction(DECREASE_COUNTER)

/**
 * Async actions with redux-thunk
 */
export const increaseCounterAsync = () => (dispatch) => {
    setTimeout(() => {
        dispatch(increaseCounter());
    }, 2000);
};

/**
 * Action handlers
 */
const handleIncrement = (state, { payload }) => ({ count: (state.count + 1) })
const handleDecrement = (state, { payload }) => ({ count: (state.count - 1) })


//Initial state of the counter
const initialState = { count: 0 };

export default handleActions({
  [INCREASE_COUNTER]: handleIncrement,
  [DECREASE_COUNTER]: handleDecrement,
}, initialState)
