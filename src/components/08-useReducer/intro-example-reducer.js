let initialState = [{
    id: 1,
    name: 'Learn react',
    done: false
}];

const myReducer = (state = initialState, action) => {
    if (action?.type === 'add') {
        return [...state, action.payload];
    }
}

let todos = myReducer();

let newTodo = [{
    id: 2,
    name: 'Practice all the hooks',
    done: false
}];

const actionAdd = {
    type: 'add',
    payload: newTodo
};

todos = myReducer(todos, actionAdd);

console.log(todos);