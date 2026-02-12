import { store } from "../../Store";
import { addTask, deleteTask } from "./TaskSlice";

store.dispatch(addTask("Learn JavaScript"));
store.dispatch(addTask("Learn React"));
store.dispatch(addTask("Learn Redux"));
store.dispatch(addTask("Learn Tailwind"));
// console.log(store.getState());
// store.dispatch(deleteTask(0));
// console.log(store.getState());