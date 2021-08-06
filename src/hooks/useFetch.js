import { useState, useEffect } from 'react';

export const useFetch = (url) => {
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
                setState({
                    data: data,
                    loading: false,
                    error: null
                });
            })
    }, [url]);

    return state;
}
