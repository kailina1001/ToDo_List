import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IChangeTaskModal {
  setActive: (modalActive: boolean) => void;
  value: string;
  onChangeTask: (text: string) => void;
  onClickChange: (e: any) => void;
}

export const ChangeTaskModal = memo(
  ({ setActive, value, onChangeTask, onClickChange }: IChangeTaskModal) => {
    return (
      <div className="change-modal">
        <p className="change-modal-text">Change your task</p>
        <textarea
          className="change-modal-textarea"
          value={value}
          onChange={(e) => onChangeTask(e.target.value)}
        ></textarea>
        <button
          className="change-modal-btn"
          onClick={(e) => {
            setActive(false);
            onClickChange(e);
          }}
        >
          Change task
        </button>
      </div>
    );
  }
);
