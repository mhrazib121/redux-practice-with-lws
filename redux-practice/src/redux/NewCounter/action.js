import { NDECREMENT, NINCREMENT } from "./actionTypes";

export const increment = (value) =>{
    return{
        type: NINCREMENT,
        payload: value
    }
};
export const decrement = (value) =>{
    return{
        type: NDECREMENT,
        payload: value
    }
};