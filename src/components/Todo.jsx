import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask } from '../Store'

const Todo = () => {
    const [task, setTask] = useState("")
    // const tasks = useSelector(state => state.task)  // react redux (old) 
    const tasks = useSelector(state => state.taskReducer.task) // redux-toolkit (new)

    const dispatch = useDispatch();

    const handleChange = (event) => {

        setTask(event.target.value)
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (task.trim() === "") return
        if (task.includes(tasks)) return false;
        dispatch(addTask(task))
        return setTask('')
    }
    const handleDelete = (id) => {
        return dispatch(deleteTask(id));
    }
    return (
        <div className="bg-slate-900 min-h-screen flex items-center justify-center p-4">
            <div className="bg-slate-100 w-full max-w-md rounded-3xl shadow-2xl flex flex-col overflow-hidden">

                <div className="pt-8 pb-4 text-center">
                    <h1 className="text-3xl font-black tracking-tighter font-mono text-slate-800">
                        TODO<span className="text-violet-500">-</span>APP
                    </h1>
                </div>

                <form onSubmit={handleFormSubmit} className="px-6 py-4 flex flex-col sm:flex-row gap-2">
                    <input
                        value={task}
                        onChange={handleChange}
                        type="text"
                        placeholder="What needs to be done?"
                        className="flex-1 border-2 border-slate-200 rounded-xl px-4 py-2 focus:outline-none focus:border-violet-400 transition-colors"
                    />
                    <button className="bg-slate-950 text-white font-bold py-2 px-6 rounded-xl hover:bg-violet-600 hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-lg shadow-slate-200">
                        Add
                    </button>
                </form>

                <div className="flex-1 px-6 pb-8">
                    <div className="h-px bg-slate-200 w-full mb-4"></div>
                    <ul className="space-y-2 text-slate-600 font-medium">
                        {tasks?.map((ele, i) => {
                            return (
                                <li key={i} className="flex items-center gap-3 px-4 py-2 hover:bg-red-200/90 bg-sky-100/80 rounded-lg transition-colors justify-between">
                                    <p><span className='pr-2'>{i + 1}.</span><span>{ele}</span></p>
                                    <button
                                        onClick={() => handleDelete(i)}
                                        className='p-1 text-slate-950 hover:text-red-500'>
                                        <FaTrash />
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>

            </div>
        </div >

    );
};

export default Todo;