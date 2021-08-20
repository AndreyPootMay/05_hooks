import React from 'react';

export const Small = React.memo(({ value }) => {
    console.log('I am get renderized again :c');

    return (
        <small>
            {value}
        </small>
    )
});
