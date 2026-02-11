import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const ADD_TASK = "task/add"
const DELETE_TASK = "task/delete"

const initialState = {
    task: [],
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:

            return {

                ...state,
                task: [...state.task, action.payload]
            };
        case DELETE_TASK:
            const updatedTask = state.task.filter((curTask, index) => {
                return index !== action.payload
            })
            return {
                ...state,
                task: updatedTask
            }
        default:
            return state;
    }
}

export const store = createStore(taskReducer);
// console.log(store)

export const addTask = (data) => {
    return { type: ADD_TASK, payload: data }
}

export const deleteTask = (id) => {
    return { type: DELETE_TASK, payload: id }
}

store.dispatch(addTask("Learn JavaScript"));
store.dispatch(addTask("Learn React"));
store.dispatch(addTask("Learn Redux"));
store.dispatch(addTask("Learn Tailwind"));
// console.log(store.getState());
// store.dispatch(deleteTask(0));
// console.log(store.getState());

