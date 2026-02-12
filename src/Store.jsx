import { configureStore } from "@reduxjs/toolkit";
import taskReducer, { addTask } from "./features/tasks/TaskSlice";

// const ADD_TASK = "task/add"
// const DELETE_TASK = "task/delete"



// const taskReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_TASK:

//             return {

//                 ...state,
//                 task: [...state.task, action.payload]
//             };
//         case DELETE_TASK:
//             const updatedTask = state.task.filter((curTask, index) => {
//                 return index !== action.payload
//             })
//             return {
//                 ...state,
//                 task: updatedTask
//             }
//         default:
//             return state;
//     }
// }

// export const store = createStore(taskReducer);  // redux old way
// // console.log(store)




export const store = configureStore({  // redux-toolkit new way
    reducer: {
        taskReducer
    }
})


// export const addTask = (data) => {
//     return { type: ADD_TASK, payload: data }
// }

// export const deleteTask = (id) => {
//     return { type: DELETE_TASK, payload: id }
// }



