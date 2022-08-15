import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DECREMENT, INCREMENT } from '../../redux/counter/actionTypes';

const HookCounter = () => {
    const count = useSelector((state)=>state.value);
    const dispatch = useDispatch();
    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={()=>dispatch({type:INCREMENT})}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={()=>dispatch({type:DECREMENT})}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};



export default HookCounter;