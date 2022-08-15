import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import newCounterReducer from "./NewCounter/newCounterReducer";

const rootReducer = combineReducers({
    oldCounter: counterReducer,
    newCounter: newCounterReducer

});

export default rootReducer;