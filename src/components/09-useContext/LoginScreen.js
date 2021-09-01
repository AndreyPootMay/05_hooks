import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
    const { user, setUser } = useContext(UserContext);

    const login = _ => {
        let userObject = {
            id: new Date().getTime(),
            name: 'AndreyPootMay',
            email: 'andreypoot.34@gmail.com'
        }

        setUser(userObject);
    }

    const logout = _ => {
        setUser({});
    }

    return (
        <>
            <h3>LoginScreen</h3>

            {
                (JSON.stringify(user) === '{}') ?
                <button className="btn btn-outline-primary" onClick={_ => login()}>
                    Login
                </button>
                :
                <button className="btn btn-outline-danger" onClick={_ => logout()}>
                    Logout
                </button>
            }
        </>
    )
}
