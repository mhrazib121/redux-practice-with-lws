// DOM element selection 
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');

// initial state 
const initialValue = {
    value:0
};

// create Redux Reducer 
function counterReducer(state = initialValue, action){
    if(action.type === "increment"){
        return{
            ...state,
            value: state.value + 1
        };
    }
    else if(action.type === "decrement"){
        return{
            ...state,
            value: state.value -1,
        };
    }
    else {
        return state
    }
};

// create Redux Store
const store = Redux.createStore(counterReducer);

// UI update 
 function render() {
    const state = store.getState();
    counterEl.innerHTML = state.value.toString();
 }
 render();

store.subscribe(render)

// button click listener 
incrementEl.addEventListener('click', () => {
    store.dispatch({
        type: "increment",
    });
});

decrementEl.addEventListener('click', () => {
    store.dispatch({
        type: "decrement",
    });
});
