import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IChangeTaskModal {
  setActive: (modalActive: boolean) => void;
}

export const ChangeTaskModal = memo(({ setActive }: IChangeTaskModal) => {
  return (
    <div className="change-modal">
      <p className="change-modal-text">Change your task</p>
      <textarea className="change-modal-input"></textarea>
      <button
        className="change-modal-btn"
        onClick={() => {
          setActive(false); /* функция сохранения изменения*/
        }}
      >
        Change task
      </button>
    </div>
  );
});
