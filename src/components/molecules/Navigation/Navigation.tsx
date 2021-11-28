import * as React from "react";
import { memo } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export const Navigation = memo(() => {
  return (
    <nav className="app-nav">
      <div className="app-nav-container">
        <div className="app-headline">
          <h1>ToDo List</h1>
        </div>
        <ul className="nav-list">
          <li className="nav-point">
            <Link className="for-link" to={"/"}>
              Create Tasks
            </Link>
          </li>
          <li className="nav-point">
            <Link className="for-link" to={"/viewTasks"}>
              View Tasks
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
});
