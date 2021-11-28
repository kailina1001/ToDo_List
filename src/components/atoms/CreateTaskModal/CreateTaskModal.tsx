import * as React from "react";
import { memo } from "react";
import "./index.css";

interface ICreateTaskModal {
  setActive: (modalActive: boolean) => void;
  value: string;
  onClick: () => void;
  onChangeHandler: (text: string) => void;
  isValid: boolean;
}

export const CreateTaskModal = memo(
  ({
    setActive,
    value,
    onClick,
    onChangeHandler,
    isValid,
  }: ICreateTaskModal) => {
    return (
      <div className="create-modal">
        <p className="create-modal-text">create your task</p>
        <textarea
          className={
            isValid
              ? "create-modal-textarea active-textarea"
              : "create-modal-textarea"
          }
          value={value}
          onChange={(e) => onChangeHandler(e.target.value)}
        >
          {isValid}
        </textarea>
        <button
          disabled={!isValid}
          className={isValid ? "create-modal-btn" : "create-modal-btn _disable"}
          onClick={() => {
            setActive(false);
            onClick();
          }}
        >
          Create task
        </button>
      </div>
    );
  }
);
