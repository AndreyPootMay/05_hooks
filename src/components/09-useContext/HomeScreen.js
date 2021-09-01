import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomeScreen = () => {
    const { user } = useContext(UserContext)

    return (
        <>
            <h3>HomeScreen</h3>
            <hr />
            <pre>
                {
                    JSON.stringify(user, null, 4)
                }
            </pre>
        </>

    )
}
