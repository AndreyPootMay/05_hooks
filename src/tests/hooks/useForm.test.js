import { useForm } from "../../hooks/useForm";
import { renderHook, act } from '@testing-library/react-hooks';

describe('Testing useForm customHook', _ => {
    const myFormInitialState = {
        name: 'AndreyPootMay',
        email: 'andrey@email.com',
    };

    test('should create a default form with initialState', () => {
        const { result } = renderHook(() => useForm(myFormInitialState));
        const [formValues, handleInputChange, reset] = result.current;

        expect(formValues).toEqual(myFormInitialState);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('Should change name from a initial state value', () => {
        const { result } = renderHook(() => useForm(myFormInitialState));
        const [, handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Dennis'
                }
            });
        });

        const [newValues] = result.current;

        expect(newValues).toEqual({ ...myFormInitialState, name: 'Dennis' });
    });

    test('Should reset the form with the hook function', () => {
        const { result } = renderHook(_ => useForm(myFormInitialState));
        const [, handleInputChange, reset] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Dennis'
                }
            });

            reset();
        });

        const [formValues] = result.current;
        expect(formValues).toEqual(myFormInitialState);
    });
});