import React from 'react';
import Button from './Button';

const Counter = ({ id, count, increment, decrement }) => {
    return (
        <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            {count}
            <div class="flex gap-4 my-3">

                <Button handler={() => increment(id)}>Increment</Button>
                <Button handler={() => decrement(id)}>Decrement</Button>
            </div>
        </div >
    );
};

export default Counter;