import { ADDED, COLOR_CHANGED, COMPLETED, DELETED } from "./actionTypes";

const initialState = [
    {
        id: 1,
        text: "Learn with Razib",
        completed: false
    },
    {
        id: 2,
        text: "Basic React-Redux guideline",
        completed: false,
        color: "red",
    },
];

const nextTodoID = (todos) => {
    const maxID = todos.reduce((maxID, todo) => Math.max(todo.id, maxID), -1);
    return maxID
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoID(state),
                    text: action.payload,
                    completed: false
                }
            ]
        case COLOR_CHANGED:
            const { todoID, color } = action.payload;
            return state.map(todo => {
                if (todo.id !== todoID) {
                    return todo;
                }
                else {
                    return {
                        ...todo,
                        color: color,
                    }
                }
            })
        case COMPLETED:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true,
                }
            })
        case DELETED:
            return state.filter(todo=> todo.id !== action.payload)

        default:
            return state
    }
};

export default reducer;