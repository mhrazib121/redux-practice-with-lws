import { NDECREMENT, NINCREMENT } from "./actionTypes";

const initialValue ={
    value:0,
};
export default function newCounterReducer(state = initialValue, action){

    switch (action.type) {
        case NINCREMENT:
            return{
                ...state,
                value: state.value + action.payload,
            }
    
        case NDECREMENT:
            return{
                ...state,
                value: state.value - action.payload,
            }
    
        default:
            return state
    }

};