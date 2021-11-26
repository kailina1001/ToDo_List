import * as React from "react";
import { memo } from "react";
import "./index.css";

interface ICreateTaskModal {
  setActive: (modalActive: boolean) => void;
}

export const CreateTaskModal = memo(({ setActive }: ICreateTaskModal) => {
  return (
    <div className="create-modal">
      <p className="create-modal-text">create your task</p>
      <textarea className="create-modal-input"></textarea>
      <button
        className="create-modal-btn"
        onClick={() => {
          setActive(false); /* функция добавления задачи на др.страницу */
        }}
      >
        Create task
      </button>
    </div>
  );
});
