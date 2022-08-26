const { createStore, applyMiddleware } = require("redux");
const {delayActionMiddleware, fetchTodosMiddleware} = require("./middlewares");
// Initial State 
const initialState = {
    todos:[]
};


// Reducer function 
const todosReducer = (state=initialState, action) => {
    switch (action.type) {
        case "todos/added":
            return {
                ...state,
                todos:[
                    ...state.todos,
                    {
                        tittle: action.payload
                    }
                ]
            }
            case "todos/todoLoaded":
                return{
                    ...state,
                    todos:[...state.todos, ...action.payload]
                }
    
        default:
            state
    }
};

// Create Store 
const store = createStore(
    todosReducer,
    applyMiddleware(delayActionMiddleware, fetchTodosMiddleware)
    );

// subscribe to state changes
store.subscribe(()=>{
    console.log(store.getState());
})

// Dispatch 
// store.dispatch({
//     type:"todos/added",
//     payload:"Practice redux with LWS"
// })

store.dispatch({
    type: "todos/fetchTodos"
})