import { ActionType, createReducer } from "typesafe-actions";
import { createTaskAction } from "../actions/tasksAction";

export interface ITasksState {
  taskItem: object;
}

const defaultState: ITasksState = {
  taskItem: {},
};

const actions = {
  createTaskAction,
};

export const tasksReducer = createReducer<
  ITasksState,
  ActionType<typeof actions>
>(defaultState).handleAction(
  createTaskAction,
  (state, { payload: taskItem }) => ({
    ...state,
    taskItem,
  })
);
