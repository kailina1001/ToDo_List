import * as React from "react";
import { memo } from "react";
import "./index.css";

interface ITaskCard {
  onClickCard: () => void;
}

export const TaskCard = memo(({ onClickCard }: ITaskCard) => {
  return (
    <div className="tasks-list">
      <div className="created-task-card" onClick={onClickCard}>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          natus veniam inventore, impedit possimus dolorum.
        </p>
        <div className="card-btns">
          <button className="change-btn">Change</button>
          <button className="delete-btn"> Delete</button>
        </div>
      </div>
    </div>
  );
});
