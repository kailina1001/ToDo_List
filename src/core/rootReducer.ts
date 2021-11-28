import { combineReducers } from "redux";
import { tasksReducer } from "../../src/core/reducers/tasksReducer";

export const rootReducer = combineReducers({ tasksReducer });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
