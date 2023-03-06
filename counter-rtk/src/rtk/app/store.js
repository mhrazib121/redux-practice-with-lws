const { configureStore } = require("@reduxjs/toolkit");
const counterReducer = require("../features/Counter/counterSlice")
const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
});

module.exports = store;