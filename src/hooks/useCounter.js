import { useState } from 'react';

export const useCounter = (initialState = 10) => {
    const [counter, setCounter] = useState(initialState);

    let increment = () => {
        setCounter(counter + 1);
    }

    let decrement = () => {
        setCounter(counter - 1);
    }

    let reset = () => {
        setCounter(initialState);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };
}
