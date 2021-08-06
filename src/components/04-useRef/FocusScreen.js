import { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = _ => {
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
        <div>
            <h1>Focus screen</h1>

            <input
                ref={inputRef}
                type="text"
                className="form-control"
            />

            <button
                onClick={handleClick}
                className="btn btn-outline-primary mt-5"
            >
                Seleccionar
            </button>
        </div>
    )
}
