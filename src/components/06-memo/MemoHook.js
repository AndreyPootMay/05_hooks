import React, { useMemo, useState } from 'react';

import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effects.css';

export const MemoHook = () => {
    const { counter, increment } = useCounter(20);

    const [show, setShow] = useState(true);

    const myProcess = (rounds) => {
        for (let i = 0; i < rounds; i++) {
            console.log('Here we go!...');
        }

        return `${rounds} Rounds in this process`;
    };

    const memoMyProcess = useMemo(
        () => myProcess(counter),
        [counter]
    );

    return (
        <>
            <h1>MemoHook</h1><br />
            <h1>Using memo for this counter: <small>{counter}</small></h1>

            <p>{memoMyProcess}</p>
            <button
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>

            <button
                className="btn btn-outline-warning ml-3"
                onClick={
                    () => {
                        setShow(!show);
                    }
                }
            >
                Show/Hide
            </button>

        </>
    )
}
