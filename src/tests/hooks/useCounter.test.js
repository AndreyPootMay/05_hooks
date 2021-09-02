import { renderHook, act } from '@testing-library/react-hooks';

import { useCounter } from '../../hooks/useCounter';

describe('Testing useCounter', () => {
    test('must return default values', () => {
        const { result } = renderHook(() => useCounter());

        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    test('counter has to be 100', () => {
        const { result } = renderHook(() => useCounter(100));

        expect(result.current.counter).toBe(100);
    });

    test('must increment the counter in one', () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;

        act(_ => {
            increment()
        })

        const { counter } = result.current;
        expect(counter).toBe(101);
    });

    test('must decrement the counter in one', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;

        act(_ => {
            decrement()
        })

        const { counter } = result.current;
        expect(counter).toBe(99);
    });

    test('must reset the counter in one hundred', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement, reset } = result.current;

        act(_ => {
            decrement();
            reset();
        });

        const { counter } = result.current;
        expect(counter).toBe(100);
    });
});