import { createSlice } from "@reduxjs/toolkit";

const localKey = "taskDb";
const initialState = {
    task: JSON.parse(localStorage.getItem(localKey)) || [
        'TechStack-1 React',
        'TechStack-2 Redux-toolkit',
        'Above data will stay default',
        'Try adding new tasks',
        'Data will stay even after Reload'
    ]
}

export const taskReducer = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask(state, action) {
            state.task.push(action.payload);
           
            localStorage.setItem(localKey, JSON.stringify(state.task));
        },
        deleteTask(state, action) {
            state.task = state.task.filter((oldData, index) => index !== action.payload);
            localStorage.setItem(localKey, JSON.stringify(state.task));
        },
        clearAll(state) {
            state.task = [];
            localStorage.removeItem(localKey);
        }
    }
});


export const { addTask, deleteTask, clearAll, saveAll } = taskReducer.actions
export default taskReducer.reducer