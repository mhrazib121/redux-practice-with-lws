import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../rtk/features/Counter/counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch()
    console.log(count)
    return (
        <div
            class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
        >
            <div class="text-2xl font-semibold">{count.count}</div>
            <div class="flex space-x-3">
                <button
                    class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={() => dispatch(counterActions.increment())}
                >
                    Increment
                </button>
                <button
                    class="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={() => dispatch(counterActions.decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default Counter;