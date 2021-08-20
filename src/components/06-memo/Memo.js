import React, { useState } from 'react';

import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

import '../02-useEffect/effects.css';

export const Memo = () => {
    const { counter, increment } = useCounter(1);

    const [show, setShow] = useState(true);

    return (
        <>
            <h1>Using memo for this counter: <Small value={counter} /></h1>

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
