import React, { useEffect, useState } from 'react';

export const Message = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = e => {
            let coords = { x: e.x, y: e.y };
            setCoords(coords);
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            console.log('Component Unmounted');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);

    return (
        <>
            <h3>You are great!</h3>
            <h4>Coords { coords.x }, { coords.y }</h4>
        </>
    )
}
