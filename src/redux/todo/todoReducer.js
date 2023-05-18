import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from "./actionType";

const initialState = {
    uid: 3,
    todos: [{
        id: 1,
        text: "Learn React JS",
        completed: true
    },
    {
        id: 2,
        text: "Learn Redux",
        completed: false,
        color: "red"
    },]
}
const todoReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADDED:

            return {
                ...state,
                uid: state.uid + 1,
                todos: [...state.todos, {
                    id: state.uid,
                    text: action.paylaod,
                    completed: false,
                    color: "",
                }]
            }
        case TOGGLED:
            const toggle = state.todos.map((todo) => {
                if (todo.id === action.paylaod) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                else {
                    return todo
                }
            })

            return {
                ...state,
                todos: toggle
            }

        case COLORSELECTED:
            const color = state.todos.map((todo) => {
                if (todo.id === action.paylaod.todoId) {
                    return {
                        ...todo,
                        color: action.paylaod.color
                    }
                }
                else {
                    return todo
                }
            })
            return {
                ...state,
                todos: color
            }
        case ALLCOMPLETED:
            const allcompleted = state.todos.map((todo) => {
                return {
                    ...todo,
                    completed: true
                }
            })
            return {
                ...state,
                todos: allcompleted
            }

        case CLEARCOMPLETED:
            const clearcompleted = state.todos.filter((todo) => !todo.completed);
            return {
                ...state,
                todos: clearcompleted
            }
        case DELETED:
            const deleted = state.todos.filter((todo) => todo.id !== action.paylaod)
            return {
                ...state,
                todos: deleted
            }

        default:
            return state
    }

};

export default todoReducer;