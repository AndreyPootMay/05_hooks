import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-multipleExamples/MultipleCustomHooks';

import '../02-useEffect/effects.css';

export const RealExampleRef = () => {
    const [show, setShow] = useState(false)

    return (
        <div>
            {show && <MultipleCustomHooks />}

            <button
                className="btn btn-primary mt-5"
                onClick={() => {
                    setShow(!show)
                }}
            >
                Show component!
            </button>
        </div>
    )
}
