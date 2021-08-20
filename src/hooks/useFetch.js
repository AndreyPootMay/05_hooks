import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {
    const isMounted = useRef(true);

    useEffect(() => {
        return _ => {
            isMounted.current = false;
        }
    }, [])

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        setState({ data: null, loading: true, error: null });

        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (isMounted.current) {
                    setState({
                        data: data,
                        loading: false,
                        error: null
                    });
                } else {
                    console.log(
                        `The component ain't rendered`
                    );
                }
            })
    }, [url]);

    return state;
}
