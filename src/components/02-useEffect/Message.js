import React, {useEffect} from 'react';

export const Message = () => {

    useEffect(() => {
        console.log('Component mounted');
        
        return () => {
            console.log('Component Unmounted');
        }
    }, []);

    return (
        <>
            <h3>You are great!</h3>
        </>
    )
}
