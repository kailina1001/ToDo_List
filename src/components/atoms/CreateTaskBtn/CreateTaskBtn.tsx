import * as React from "react";
import { memo } from "react";
import "./index.css";

interface ICreateTaskBtn {
  onClickCreate: () => void;
}

export const CreateTaskBtn = memo(({ onClickCreate }: ICreateTaskBtn) => {
  return (
    <button className="create-task-btn" onClick={onClickCreate}>
      +
    </button>
  );
});
