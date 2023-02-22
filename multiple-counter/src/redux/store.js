import { createStore } from "redux"
import CounterReducer from "./Counter/CounterReducer"

const store = createStore(CounterReducer);

export default store;