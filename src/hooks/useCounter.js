import {useState} from 'react';

export const useCounter = (initialState = 10) => {
    const [state, setState] = useState(initialState);

    let increment = (factor = 1) => {
        setState(state + factor);
    }

    let decrement = (factor = 1) => {
        setState(state - factor);
    }

    let reset = () => {
        setState(initialState);
    }

    return {
        state,
        increment,
        decrement,
        reset
    };
}
