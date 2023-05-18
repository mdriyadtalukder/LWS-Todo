import React from 'react';
import cancell from '../../assets/images/cancel.png';
import { useDispatch } from 'react-redux';
import { colorSelected, deleted, toggle } from '../../redux/todo/action';


const ToDo = ({ todo }) => {
    const dispatch = useDispatch();
    const toggleHandle = (id) => {
        dispatch(toggle(id))
    }
    const colocrChange = (id, color) => {
        dispatch(colorSelected(id, color));
    }
    const handledelete = (id) => {
        dispatch(deleted(id));
    }
    return (
        <div
            class="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0"
        >
            <div
                class={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${todo?.completed && "border-green-500 focus-within:border-green-500"}`}>
                <input
                    type="checkbox"
                    checked={todo?.completed}
                    onChange={() => toggleHandle(todo?.id)}
                    class="opacity-0 absolute rounded-full"
                />
                {todo?.completed && <svg
                    class=" fill-current w-3 h-3 text-green-500 pointer-events-none"
                    viewBox="0 0 20 20"
                >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>}
            </div>

            <div class={`select-none flex-1 ${todo?.completed && "line-through"}`}>
                {todo?.text}
            </div>

            <div class={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${todo?.color === "green" && "bg-green-500"}`} onClick={() => colocrChange(todo?.id, "green")}
            ></div>

            <div class={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${todo?.color === "yellow" && "bg-yellow-500"}`} onClick={() => colocrChange(todo?.id, "yellow")}
            ></div>

            <div class={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${todo?.color === "red" && "bg-red-500"}`} onClick={() => colocrChange(todo?.id, "red")}
            ></div>


            <img
                src={cancell}
                class="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                alt="Cancel"
                onClick={() => handledelete(todo?.id)}
            />
        </div>
    );
};

export default ToDo;