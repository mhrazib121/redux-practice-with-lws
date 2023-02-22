import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./actionTypes";

export const increment = (value) => {
    return {
        type: COUNTER_INCREMENT,
        payload: value,
    }
};
export const decrement = (value) => {
    return {
        type: COUNTER_DECREMENT,
        payload: value,
    }
};