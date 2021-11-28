import * as React from "react";
import { memo } from "react";
import "./index.css";
interface ITaskCard {
  onClickCard: (e: any) => void;
  onClickDel: (e: any) => void;
  cardsArray: Array<any>;
}

export const TaskCard = memo(
  ({ onClickCard, onClickDel, cardsArray }: ITaskCard) => {
    return (
      <div className="tasks-list">
        {cardsArray?.map((item) => {
          return (
            <div className="created-task-card" key={item.id} id={item.id}>
              <p className="card-text">{item.description}</p>
              <div className="card-btns">
                <button className="change-btn" onClick={onClickCard}>
                  Change
                </button>
                <button className="delete-btn" onClick={onClickDel}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);
