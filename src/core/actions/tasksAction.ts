import { createAction } from "typesafe-actions";
import { ACTIONS } from "./constants";

export const createTaskAction = createAction(ACTIONS.CREATE_TASK)<{}>();
