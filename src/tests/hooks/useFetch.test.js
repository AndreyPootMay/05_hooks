import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe('testing the useFetch customHook', () => {
    test('should get the default info', () => {
        const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        const { data, loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    });

    test('should get the expected info, loading false and error in null', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        await waitForNextUpdate();

        const { data, loading, error } = result.current;

        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);
    });

    test('should manage the errors', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://reqres.in/apid/users?page=2'));
        await waitForNextUpdate();

        const { data, loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe(`Data can't be loaded`);
    });
});
