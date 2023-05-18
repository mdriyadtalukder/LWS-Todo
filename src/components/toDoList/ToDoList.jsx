import React from 'react';
import ToDo from './ToDo';
import { useSelector } from 'react-redux';

const ToDoList = () => {
    const todos = useSelector((state) => state.todos.todos)
    const filters = useSelector((state) => state.filters)
    const filterByColor=(todo) => {
        const { color } = filters;
        if (color.length > 0) {
            return color.includes(todo?.color);
        }
        else {
            return true;
        }


    }
    return (
        <div class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">


            {
                todos.filter((todo) => {
                    const { status } = filters;
                    switch (status) {
                        case "Complete":

                            return todo.completed;

                        case "Incomplete":

                            return !todo.completed;

                        default:
                            return true;
                    }
                })
                    .filter(filterByColor)
                    .map((todo) => <ToDo todo={todo} key={todo.id}></ToDo>)
            }
        </div>
    );
};

export default ToDoList;