import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./actionTypes";

const initialState = {
    value: 0,
}

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER_INCREMENT:
            return {
                ...state,
                value: state.value + action.payload,
            }
        case COUNTER_DECREMENT:
            return {
                ...state,
                value: state.value - action.payload,
            }
        default:
            return state;
    }
};

export default CounterReducer;