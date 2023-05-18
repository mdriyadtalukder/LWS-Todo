import React, { useRef } from 'react';
import noteImg from '../../assets/images/notes.png';
import dTick from '../../assets/images/double-tick.png';
import plus from '../../assets/images/plus.png';
import { useDispatch } from 'react-redux';
import { added, allcompleted, clearcompleted } from '../../redux/todo/action';

const Header = () => {
    const text = useRef('');
    const dispatch = useDispatch();
    const addTodo = (event) => {
        event.preventDefault()
        dispatch(added(text.current.value));
        text.current.value='';
    }

    const completeAll=()=>{
        dispatch(allcompleted());
    }

    const clearComplete=()=>{
        dispatch(clearcompleted());
    }
    return (
        <div>
            <form
                class="flex items-center bg-gray-100 px-4 py-4 rounded-md" onSubmit={addTodo}
            >
                <img
                    src={noteImg}
                    class="w-6 h-6"
                    alt="Add todo"
                />
                <input
                    ref={text}
                    type="text"
                    placeholder="Type your todo"
                    class="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                />
                <button
                    type="submit"
                    class={`appearance-none w-8 h-8 bg-[url("${plus}")] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul class="flex justify-between my-4 text-xs text-gray-500">
                <li class="flex space-x-1 cursor-pointer" onClick={completeAll}>
                    <img
                        class="w-4 h-4"
                        src={dTick}
                        alt="Complete"
                    />
                    <span>Complete All Tasks</span>
                </li>
                <li class="cursor-pointer" onClick={clearComplete}>Clear completed</li>
            </ul>
        </div>
    );
};

export default Header;