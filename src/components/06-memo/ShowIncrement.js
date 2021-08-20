import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {
    console.log(`I generated again :c !`);

    return (
        <button
            className="btn btn-primary"
            onClick={
                _ => {
                    increment(5);
                }
            }
        >
            +1
        </button>
    )
})
