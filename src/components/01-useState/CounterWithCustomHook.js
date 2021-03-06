import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import "./counter.css";

export const CounterWithCustomHook = () => {
    const {
        state: counter,
        increment,
        decrement,
        reset
    } = useCounter(100);

    return (
        <>
            <h1>number: {counter}</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={() => increment(2)}
            >
                +
            </button>

            <button
                className="btn btn-danger"
                onClick={() => decrement(2)}
            >
                -
            </button>

            <button
                className="btn btn-default"
                onClick={reset}
            >
                Reset
            </button>
        </>
    )
}
