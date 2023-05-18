import { combineReducers } from "redux";
import  todoReducer from "./todo/todoReducer";
import  filterReducer from  "./filter/filterReducer";

const rootReducer=combineReducers({
    todos:todoReducer,
    filters:filterReducer
})
export default rootReducer;