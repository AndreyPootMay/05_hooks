import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './styles.css';

export const Layout = () => {
    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { quote } = !!data && data[0];

    const paragraphElement = useRef();
    const [paragraphSize, setParagraphSize] = useState({});

    useLayoutEffect(() => {
        setParagraphSize(paragraphElement.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>useLayoutEffect</h1>
            <hr />

            <blockquote
                className="blockquote text-right"
            >
                <p
                    className="mb-0"
                    ref={paragraphElement}
                >{quote}</p>
            </blockquote>

            <pre>
                {JSON.stringify(paragraphSize, null, 3)}
            </pre>

            <button
                className="btn btn-primary"
                onClick={increment}
            >
                Next quote
            </button>
        </div>
    )
}
