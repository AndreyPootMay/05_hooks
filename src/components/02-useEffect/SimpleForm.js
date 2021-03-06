import React, { useState, useEffect } from 'react'
import './effects.css'
export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        console.log('all the component change!');
    });

    useEffect(() => {
        console.log('complete form changes!');
    }, [formState]);

    useEffect(() => {
        console.log('email changes!');
    }, [email]);

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }
    return (
        <>
            <h1>UseEffect</h1>
            <hr />

            <div className="form-group">
                <input type="text"
                name="name"
                className="form-control"
                placeholder="Your name"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
                />
            </div>


            <div className="form-group">
                <input type="text"
                name="email"
                className="form-control"
                placeholder="info@email.com"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
                />
            </div>
        </>
    )
}
