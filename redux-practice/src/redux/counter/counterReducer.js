import { DECREMENT, INCREMENT } from "./actionTypes";

const initialValue ={
    value:0,
};
export default function counterReducer(state = initialValue, action){

    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                value: state.value + 1,
            }
    
        case DECREMENT:
            return{
                ...state,
                value: state.value - 1,
            }
    
        default:
            return state
    }

};