import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorChanged, statusChanged } from '../../redux/filter/action';
const numberOfTodo = (n) => {
    switch (n) {
        case 0:
            return "No task";
        case 1:
            return "1 task"

        default:
            return `${n} tasks`;
    }
}
const Footer = () => {
    const todos = useSelector((state) => state.todos.todos);
    const filters = useSelector((state) => state.filters);
    console.log(filters.color)

    const dispatch = useDispatch();
    const totalIncompletedTask = todos.filter((todo) => !todo.completed).length;
    const statuss = (s) => {
        dispatch(statusChanged(s));
    }
    const handlecolor = (c) => {
        if (filters.color.includes(c)) {

            dispatch(colorChanged(c, 'removed'));

        }
        else {
            dispatch(colorChanged(c, 'added'));

        }
    }
    return (
        <div class="mt-4 flex justify-between text-xs text-gray-500">
            <p>{numberOfTodo(totalIncompletedTask)} left</p>
            <ul class="flex space-x-1 items-center text-xs">
                <li class={`cursor-pointer ${filters?.status == "All" && "font-bold"}`} onClick={() => statuss("All")}>All</li>
                <li>|</li>
                <li class={`cursor-pointer ${filters?.status == "Incomplete" && "font-bold"}`} onClick={() => statuss('Incomplete')}>Incomplete</li>
                <li>|</li>
                <li class={`cursor-pointer ${filters?.status == "Complete" && "font-bold"}`} onClick={() => statuss("Complete")}>Complete</li>
                <li></li>
                <li></li>
                <li
                    class={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${filters.color.includes("green") && "bg-green-500"}`} onClick={() => handlecolor("green")}
                ></li>
                <li
                    class={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${filters.color.includes("red") && "bg-red-500"}`} onClick={() => handlecolor("red")}
                ></li>
                <li
                    class={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${filters.color.includes("yellow") && "bg-yellow-500"}`} onClick={() => handlecolor("yellow")}
                ></li>
            </ul>
        </div>
    );
};

export default Footer;