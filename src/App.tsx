import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { PublicRoute } from "./router/PublicRoute";
import { AddTasks } from "./components/pages/AddTasks";
import { ViewTasks } from "./components/pages/ViewTasks";

function App() {
  return (
    <div>
      <Switch>
        <PublicRoute component={AddTasks} path="/" exact />
        <PublicRoute component={ViewTasks} path="/viewTasks" exact />
      </Switch>
    </div>
  );
}

export default App;
