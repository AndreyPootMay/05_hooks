import React from 'react';

export const Child = React.memo(({ number, increment }) => {
    console.log('I am generated again :c !!!');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={_ => increment(number)}
        >
            {number}
        </button>
    )
})
