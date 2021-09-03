import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { todoList } from './fixtures/todoList';

describe('Testing the todoReducer', () => {
    test('should return the original state', () => {
        const state = todoReducer(todoList, {});

        expect(state).toEqual(todoList);
    });

    test('should add a new todo', () => {
        const payload = {
            id: 3,
            desc: 'My New task'
        };

        const state = todoReducer(todoList, {type: 'add', payload});

        expect(state).toHaveLength(3);
        expect(state).toEqual([...todoList, payload]);
    });

    test('should delete a todo', () => {
        const payload = 1;

        const state = todoReducer(todoList, {type: 'delete', payload});

        expect(state).toHaveLength(1);
        expect(state).toEqual([todoList[1]]);
    });

    test('should toggle a todo', () => {
        const action = {
            type: 'toggle',
            payload: 1,
        };

        const state = todoReducer(todoList, action);

        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(todoList[1]);
    });
});
