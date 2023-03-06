const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    count: 5,
};

const counterSlice = createSlice({
    name: "Counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count++;
        },

        decrement: (state, action) => {
            state.count--;
        }
    }
});

module.exports = counterSlice.reducer;
module.exports.counterActions = counterSlice.actions;