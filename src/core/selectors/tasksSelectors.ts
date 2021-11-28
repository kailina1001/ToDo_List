import { IState } from "../types";

export const getTasksSelector = ({ tasksReducer }: IState) => tasksReducer;
